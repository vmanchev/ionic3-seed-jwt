import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentConfirmationPage } from './appointment-confirmation-page';

@NgModule({
  declarations: [
    AppointmentConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentConfirmationPage),
  ],
  exports: [
    AppointmentConfirmationPage
  ]
})
export class AppointmentConfirmationPageModule {}
