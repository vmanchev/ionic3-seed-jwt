import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookInfoPage } from './book-info-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BookInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    BookInfoPage
  ]
})
export class BookInfoPageModule {}
