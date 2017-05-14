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

  public appointments = [{
    doctor: {
      first_name: 'Дора',
      last_name: 'Кулова'
    },
    practice: {
      address: 'ДКЦ 15, ул. Никола Габровски 15'
    },
    timeSlot: {
      "from": "2017-06-18 08:20:00"
    }
  }, {
    doctor: {
      first_name: 'Гергана',
      last_name: 'Гоцева'
    },
    practice: {
      address: 'Софиямед'
    },
    timeSlot: {
      "from": "2017-06-22 14:30:00"
    }
  }];

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
