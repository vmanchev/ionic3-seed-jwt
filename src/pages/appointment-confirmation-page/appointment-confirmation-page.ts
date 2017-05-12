import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-appointment-confirmation-page',
  templateUrl: 'appointment-confirmation-page.html',
})
export class AppointmentConfirmationPage {

  public appointment: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage) {

    this.appointment = navParams.get('appointment');

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  confirmAppointnemt() {

    this.storage.get('user').then(user => {

      this.appointment.timeSlot.status_id = 2;
      this.appointment.timeSlot.user_id = user.id;


      this.viewCtrl.dismiss({confirmedAppointment: this.appointment});
    });



  }

}
