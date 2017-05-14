import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BooksPage} from './books-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BooksPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksPage),
    TranslateModule.forChild()
  ],
  exports: [
    BooksPage
  ]
})
export class BooksPageModule {}
