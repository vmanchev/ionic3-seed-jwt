import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BooksService} from '../../providers/books-service';
import {BookModel} from '../../models/book.model';

@IonicPage()
@Component({
  selector: 'page-book-edit-page',
  templateUrl: 'book-edit-page.html',
})
export class BookEditPage extends ProtectedPage {

  private bookData: FormGroup;
  private book: BookModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public booksService: BooksService) {

    super(navCtrl, navParams, storage);

    this.book = navParams.get('book');


    this.bookData = this.formBuilder.group({
      title: [this.book.title, Validators.required],
      author_name: [this.book.author_name, Validators.required],
      pages_count: [this.book.pages_count, Validators.required],
    });
  }

  process() {

    let updatedBook = Object.assign(this.book, this.bookData.value);

    this.booksService.update(updatedBook)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("add book error", e));
  }


}
