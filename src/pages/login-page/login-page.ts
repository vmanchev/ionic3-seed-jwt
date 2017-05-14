import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';

import {ForgotPage} from '../forgot-page/forgot-page';
import {RegisterPage} from '../register-page/register-page';
import {UserModel} from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  private loginData: FormGroup;
  public forgotPage: any;
  public registerPage: any;
  public user: UserModel;
  public showRoleSelection: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public authService: AuthService) {

    this.loginData = this.formBuilder.group({
      egn: ['', Validators.compose([Validators.required, Validators.minLength(10), , Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this.forgotPage = ForgotPage;
    this.registerPage = RegisterPage;
    this.showRoleSelection = false;


  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  login() {

    //use this.loginData.value to authenticate the user


    this.authService.login()
      .then(() => {

        this.storage.get('user').then((user) => {

          this.user = user;

          if (user.role === 'ROLE_PATIENT') {
            this.redirectToHome();
          } else {
            this.showRoleSelection = true;
          }
        });


      })
      .catch(e => console.log("login error", e));
  }

  setRole(role?: any) {

    if (role && role.length) {
      this.user.role = role;

      this.storage.set('user', this.user).then(() => {
        this.redirectToHome();
      });
    } else {
      this.redirectToHome();
    }
  }

  redirectToHome() {
    this.navCtrl.setRoot('HomePage');
    this.menuCtrl.enable(true);
  }
}
