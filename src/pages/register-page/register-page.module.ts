import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterPage} from './register-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    TranslateModule.forChild()
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
