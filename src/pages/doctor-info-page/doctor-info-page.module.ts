import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorInfoPage } from './doctor-info-page';

@NgModule({
  declarations: [
    DoctorInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorInfoPage),
  ],
  exports: [
    DoctorInfoPage
  ]
})
export class DoctorInfoPageModule {}
