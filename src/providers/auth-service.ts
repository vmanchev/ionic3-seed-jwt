import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import {UserModel} from '../models/user.model';
import {CredentialsModel} from '../models/credentials.model';

import *  as AppConfig from '../app/config';

@Injectable()
export class AuthService {

  private cfg: any;

  constructor(
    private storage: Storage,
    private http: Http,
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
  }

  register(userData: UserModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.register, userData)
      .toPromise()
      .then(data => this.saveData(data))
      .catch(e => console.log("reg error", e));

  }

  login(credentials: CredentialsModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.login, credentials)
      .toPromise()
      .then(data => this.saveData(data))
      .catch(e => console.log('login error', e));

  }

  saveData(data: any) {

    let rs = data.json();

    this.storage.set("user", rs.user);
    this.storage.set("id_token", rs.token);
  }

  logout() {
    this.storage.remove('user');
    this.storage.remove('id_token');
  }

  isValid() {
    return tokenNotExpired();
  }

}
