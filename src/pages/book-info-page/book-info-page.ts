import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BooksService} from '../../providers/books-service';
import {BookModel} from '../../models/book.model';

@IonicPage()
@Component({
  selector: 'page-book-info-page',
  templateUrl: 'book-info-page.html',
})
export class BookInfoPage extends ProtectedPage {

  private book: BookModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public booksService: BooksService) {

    super(navCtrl, navParams, storage);
    
    this.book = navParams.get('book');

  }
  
  editBook(book: BookModel) {
    this.navCtrl.push('BookEditPage', {book: book});
  }
  
  deleteBook(book: BookModel) {
    this.booksService.remove(book.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("delete book error", e)); 
  }



}
