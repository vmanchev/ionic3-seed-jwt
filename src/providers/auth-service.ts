import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import {UserModel} from '../models/user.model';
import {CredentialsModel} from '../models/credentials.model';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';
import *  as AppConfig from '../app/config';

@Injectable()
export class AuthService {

  private cfg: any;
  idToken: string;
  refreshSubscription: any;


  constructor(
    private storage: Storage,
    private http: Http,
    private jwtHelper:JwtHelper,
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
    this.storage.get('id_token').then(token => {
        this.idToken = token;
    });

  }

  register(userData: UserModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.register, userData)
      .toPromise()
      .then(data => {
        this.saveData(data)
        let rs = data.json();
        this.idToken = rs.token;
        this.scheduleRefresh();
      })
      .catch(e => console.log("reg error", e));


  }

  login(credentials: CredentialsModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.login, credentials)
      .toPromise()
      .then(data => {
          let rs = data.json();
         this.saveData(data);
         this.idToken = rs.token;
         this.scheduleRefresh();
      })
      .catch(e => console.log('login error', e));


  }

  saveData(data: any) {

    let rs = data.json();

    this.storage.set("user", rs.user);
    this.storage.set("id_token", rs.token);
  }

  logout() {
    // stop function of auto refesh
    this.unscheduleRefresh();
    this.storage.remove('user');
    this.storage.remove('id_token');

  }

  isValid() {
    return tokenNotExpired();
  }


  public getNewJwt() {
     // Get a new JWT from Auth0 using the refresh token saved
     // in local storage
    this.storage.get("id_token").then((thetoken)=>{

      let  senddata: { Token:string} = {
           Token : thetoken
        };

        this.http.get(this.cfg.apiUrl + this.cfg.user.refresh+"?Token="+thetoken)
         .map(res => res.json())
         .subscribe(res => {
           console.log(JSON.stringify(res));
           console.log(res.status);
           // If the API returned a successful response, mark the user as logged in
           // this need to be fixed on Laravel project to retun the New Token ;
            if(res.status == 'success') {
                   this.storage.set("id_token", res.token);

             } else {
               console.log("The Token Black Listed");
               this.logout();

            }
         }, err => {
           console.error('ERROR', err);
          });

       });

   }


  public scheduleRefresh() {
  // If the user is authenticated, use the token stream
  // provided by angular2-jwt and flatMap the token

  let source = Observable.of(this.idToken).flatMap(
    token => {
      // The delay to generate in this case is the difference
      // between the expiry time and the issued at time
      let jwtIat = this.jwtHelper.decodeToken(token).iat;
      let jwtExp = this.jwtHelper.decodeToken(token).exp;
      let iat = new Date(0);
      let exp = new Date(0);

      let delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));
      console.log("will start refresh after :",(delay/1000)/60);
      if(delay-1000<=0)
      delay = 1;
      return Observable.interval(delay);
    });

  this.refreshSubscription = source.subscribe(() => {
    this.getNewJwt();
  });
}



public startupTokenRefresh() {
    // If the user is authenticated, use the token stream
    // provided by angular2-jwt and flatMap the token

    this.storage.get("id_token").then((thetoken)=>{

      if(thetoken){

        let source = Observable.of(thetoken).flatMap(
          token => {
            // Get the expiry time to generate
            // a delay in milliseconds
            let now: number = new Date().valueOf();
            let jwtExp: number = this.jwtHelper.decodeToken(token).exp;
            let exp: Date = new Date(0);
            exp.setUTCSeconds(jwtExp);
            let delay: number = exp.valueOf() - now;

            if(delay <= 0) {
              delay=1;
            }
             // Use the delay in a timer to
            // run the refresh at the proper time
            return Observable.timer(delay);
          });

         // Once the delay time from above is
         // reached, get a new JWT and schedule
         // additional refreshes
         source.subscribe(() => {
           this.getNewJwt();
           this.scheduleRefresh();
         });

      }else{
        //there is no user logined
        console.info("there is no user logined ");

      }

    });


    }




public unscheduleRefresh() {
// Unsubscribe fromt the refresh
if (this.refreshSubscription) {
this.refreshSubscription.unsubscribe();
}
}

}
