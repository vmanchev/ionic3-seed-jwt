import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookAddPage} from './book-add-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    BookAddPage
  ]
})
export class BookAddPageModule {}
