import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserModel} from '../../models/user.model';

/**
 * Generated class for the DoctorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doctor-info-page',
  templateUrl: 'doctor-info-page.html',
})
export class DoctorInfoPage extends ProtectedPage {

  public user: UserModel;

  public doctor = {
    first_name: 'Дора',
    last_name: 'Кулова',
    schedule: {
      "date": "2017-06-18",
      "timeSlots": [{
        "from": "2017-06-18 08:00:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 08:20:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 08:40:00",
        "status_id": 2
      }, {
        "from": "2017-06-18 09:00:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 09:20:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 09:40:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 10:00:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 10:20:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 10:40:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 11:00:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 11:20:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 11:40:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 12:00:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 12:20:00",
        "status_id": 1
      }, {
        "from": "2017-06-18 12:40:00",
        "status_id": 1
      }]
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public modalCtrl: ModalController) {

    super(navCtrl, navParams, storage);

    this.storage.get('user').then(u => this.user = u);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorInfoPage');
  }

  confirmAppointment(timeSlot) {

    let appointment = {
      doctor: {
        first_name: this.doctor.first_name,
        last_name: this.doctor.last_name
      },
      timeSlot: timeSlot
    };

    let modal = this.modalCtrl.create('AppointmentConfirmationPage', {appointment: appointment});
    modal.present();

    modal.onDidDismiss(data => {
      //update backend
    });

  }

}
