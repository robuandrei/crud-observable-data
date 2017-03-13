import {Component, EventEmitter} from "@angular/core";
import {BookServices} from "../../../common/services/BookServices";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'add-book',
    templateUrl: 'add-book.template.html',
    styleUrls: ['add-book.style.css'],
    providers: [BookServices],
    outputs: ['bookAdded']
})

export class AddBookComponent {

    bookAdded: any;

    constructor(private bookServices: BookServices) {
      this.bookAdded = new EventEmitter();
    }

    onSubmit(addBookForm: NgForm) {
        this.bookServices.addAPIBook(addBookForm.value);
        addBookForm.reset();

        this.bookAdded.emit('bookAdded');

    }
}