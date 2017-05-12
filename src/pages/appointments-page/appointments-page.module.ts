import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentsPage } from './appointments-page';

@NgModule({
  declarations: [
    AppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsPage),
  ],
  exports: [
    AppointmentsPage
  ]
})
export class AppointmentsPageModule {}
