import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BooksService} from '../../providers/books-service';

@IonicPage()
@Component({
  selector: 'page-book-add-page',
  templateUrl: 'book-add-page.html',
})
export class BookAddPage extends ProtectedPage {

  private bookData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public booksService: BooksService) {

    super(navCtrl, navParams, storage);

    this.bookData = this.formBuilder.group({
      title: ['', Validators.required],
      author_name: ['', Validators.required],
      pages_count: ['', Validators.required],
    });
  }

  process() {
    this.booksService.add(this.bookData.value)
      .then(() => this.navCtrl.push('BooksPage'))
      .catch((e) => console.log("add book error", e));
  }


}
