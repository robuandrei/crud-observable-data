import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BookServices} from "../../../common/services/BookServices";
import 'rxjs/Rx';
import {Book} from "../../../common/interfaces/Book";
import {Observable} from "rxjs";

@Component({
    selector: 'book-page',
    templateUrl: 'book-page.template.html',
    styleUrls: ['book-page.style.css'],
    providers: [BookServices]
})

export class BookPageComponent implements  OnInit{

    id: any;
    bookId: any;
    book: Observable<Book[]>;
    madeEditable: boolean = false;

    constructor(private route: ActivatedRoute, private bookServices: BookServices){

        this.id = route.params
            .map((book: any) => this.bookId = book.id);
        this.bookId = this.id.source._value.id;
    }

    ngOnInit() {
        this.book = this.bookServices.book;
        this.bookServices.getAPIBook(this.bookId);

        document.getElementById('btnAdd').style.display='none';
        document.getElementById('btnBack').style.display='block';
    }

    editableBook() {
        this.madeEditable = !this.madeEditable;
    }

    editMade(bookEdited) {
        if(bookEdited){
            this.madeEditable = false;
            setTimeout(() => {
                this.bookServices.getAPIBook(this.bookId);
            })
        }
    }
}
