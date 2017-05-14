import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookEditPage} from './book-edit-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BookEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    BookEditPage
  ]
})
export class BookEditPageModule {}
