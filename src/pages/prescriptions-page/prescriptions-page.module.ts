import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptionsPage } from './prescriptions-page';

@NgModule({
  declarations: [
    PrescriptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptionsPage),
  ],
  exports: [
    PrescriptionsPage
  ]
})
export class PrescriptionsPageModule {}
