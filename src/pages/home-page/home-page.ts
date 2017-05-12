import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

import {DoctorsPage} from '../doctors-page/doctors-page';
import {PrescriptionsPage} from '../prescriptions-page/prescriptions-page';

import {UserModel} from '../../models/user.model';


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
})
export class HomePage extends ProtectedPage {

  public user: UserModel;
  
  public doctorsPage: any;
  public prescriptionsPage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage) {
    
    super(navCtrl, navParams, storage);
    
    this.storage.get('user').then(user => this.user = user);
    
    this.doctorsPage = DoctorsPage;
    this.prescriptionsPage = PrescriptionsPage;
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    console.log('ionViewDidLoad HomePage');
  }

}
