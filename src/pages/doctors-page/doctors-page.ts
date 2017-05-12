import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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

  public doctor = {
    first_name: 'Дора',
    last_name: 'Кулова',
    daySchedule: {
      "date": "2017-06-18",
      "schedule": [{
        "from": "08:00",
        "status_id": 1
      }, {
        "from": "08:20",
        "status_id": 1
      }, {
        "from": "08:40",
        "status_id": 2
      }, {
        "from": "09:00",
        "status_id": 1
      }, {
        "from": "09:20",
        "status_id": 1
      }, {
        "from": "09:40",
        "status_id": 1
      }, {
        "from": "10:00",
        "status_id": 1
      }, {
        "from": "10:20",
        "status_id": 1
      }, {
        "from": "10:40",
        "status_id": 1
      }, {
        "from": "11:00",
        "status_id": 1
      }, {
        "from": "11:20",
        "status_id": 1
      }, {
        "from": "11:40",
        "status_id": 1
      }, {
        "from": "12:00",
        "status_id": 1
      }, {
        "from": "12:20",
        "status_id": 1
      }, {
        "from": "12:40",
        "status_id": 1
      }]
    }
  };

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
