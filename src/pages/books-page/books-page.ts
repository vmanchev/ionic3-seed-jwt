import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {BooksService} from '../../providers/books-service';
import {BookModel} from '../../models/book.model';

@IonicPage()
@Component({
  selector: 'page-books-page',
  templateUrl: 'books-page.html',
})
export class BooksPage extends ProtectedPage {

  public books: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public booksService: BooksService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.booksService.getAll().then(books => this.books = books);
  }
  
  bookInfo(book: BookModel) {
    this.navCtrl.push('BookInfoPage', {book: book});
  }

  /**
   * Opens a paage
   * 
   * @param page string Page name
   */
  openPage(page: string) {
    this.navCtrl.push(page);
  }

}
