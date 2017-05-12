import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPage } from './forgot-page';

@NgModule({
  declarations: [
    ForgotPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPage),
  ],
  exports: [
    ForgotPage
  ]
})
export class ForgotPageModule {}
