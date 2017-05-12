import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the DoctorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doctors-page',
  templateUrl: 'doctors-page.html',
})
export class DoctorsPage extends ProtectedPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
    
    super(navCtrl, navParams, storage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsPage');
  }

}
