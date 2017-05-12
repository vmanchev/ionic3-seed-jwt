import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-appointments-page',
  templateUrl: 'appointments-page.html',
})
export class AppointmentsPage extends ProtectedPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
    
    super(navCtrl, navParams, storage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

}
