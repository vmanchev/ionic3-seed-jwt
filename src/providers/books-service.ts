import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BookModel} from '../models/book.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class BooksService {

  private cfg: any;

  constructor(
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
  }

  getAll() {
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.books)
      .toPromise()
      .then(rs => {
        return rs.json();
      });
  }

  getOne(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.books + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().book;
      });
  }

  add(book: BookModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.books, book)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create book error", e));
  }

  update(book: BookModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.books + '/' + book.id, book)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("update book error", e));
  }

  remove(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.cfg.books + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("delete book error", e));
  }

}
