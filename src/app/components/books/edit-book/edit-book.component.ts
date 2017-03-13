import {Component, EventEmitter, OnInit} from "@angular/core";
import {BookServices} from "../../../common/services/BookServices";
import {Book} from "../../../common/interfaces/Book";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'edit-book',
    templateUrl: 'edit-book.template.html',
    styleUrls: ['edit-book.style.css'],
    providers: [BookServices],
    outputs: ['notifyEdit']
})

export class EditBookComponent implements  OnInit{

    notifyEdit: any;
    id: any;
    bookId: any;
    editableBook: Observable<Book[]>;

    constructor(private route: ActivatedRoute, private bookServices: BookServices){
        this.id = route.params
            .map((book: any) => this.bookId = book.id);
        this.bookId = this.id.source._value.id;

        this.notifyEdit = new EventEmitter();
    }

    ngOnInit() {
        this.editableBook = this.bookServices.book;
        this.bookServices.getAPIBook(this.bookId);
    }

    onSubmit(editBookForm: NgForm, bookId: number){
        this.bookServices.updateAPIBook(editBookForm.value, bookId);
        this.notifyEdit.emit('bookEdit');
    }

}