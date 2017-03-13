import {Component} from "@angular/core";
import {BookServices} from "../../../common/services/BookServices";
import {Book} from "../../../common/interfaces/Book";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import 'rxjs/Rx';

@Component({
    selector: 'book-list',
    templateUrl: 'book-list.template.html',
    styleUrls: ['book-list.style.css'],
    providers: [BookServices]
})

export class BookListComponent {

    books: Observable<Book[]>;

    constructor(private bookServices: BookServices){

    }

    ngOnInit() {
        this.books = this.bookServices.books;
        this.bookServices.getAPIBooks();

        document.getElementById('btnAdd').style.display='block';
        document.getElementById('btnBack').style.display='none';
    }

    addedNotify(book){
      if(book === 'bookAdded') {
        setTimeout(() => {
          this.bookServices.getAPIBooks();
        }, 100);
      }
    }
}