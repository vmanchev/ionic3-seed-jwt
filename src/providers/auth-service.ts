import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';

import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService {

  constructor(
    private storage: Storage,
    private http: Http,
    private authHttp: AuthHttp) {

  }

  register(userData: UserModel) {

    let h = new Headers();
    h.append('Access-Control-Expose-Headers', 'Authorization');
    
    let rqo = new RequestOptions();
    rqo.headers = h;

    return this.http.post('http://localhost:3000/users', userData, rqo)
      .toPromise()
      .then(data => {
        console.log(data)
        this.storage.set("user", data.json());
        this.storage.set("id_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
        return true;
      })
      .catch(e => console.log("regError", e));

  }

  login() {

    return this.http.get('http://localhost:3000/users/1')
      .toPromise()
      .then(data => {
        
        let u = data.json();
        u.role = 'ROLE_DOCTOR';

        this.storage.set("user", u);
        this.storage.set("id_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
        return true;
      });

  }

  logout() {
    this.authHttp
      .delete('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(() => {
        this.storage.remove('user');
        this.storage.remove('id_token');
      });
  }

  isValid() {
    return tokenNotExpired();
  }

}
