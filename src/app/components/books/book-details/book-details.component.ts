import {Component, EventEmitter} from "@angular/core";
import {BookServices} from "../../../common/services/BookServices";

@Component({
    selector: 'book-details',
    templateUrl: 'book-details.template.html',
    styleUrls: ['book-details.style.css'],
    inputs:['books'],
    outputs: ['deleteNotify']
})

export class BookDetailsComponent {

    deleteNotify: any;

    constructor(private bookServices: BookServices) {

        this.deleteNotify = new EventEmitter();
    }

    removeBook(userId) {
        this.bookServices.removeAPIBook(userId);
    }


}