import {Injectable} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {Book} from "../interfaces/Book";
import {Http} from "@angular/http";
import {customHeader} from "../headers/headers";

@Injectable()
export class BookServices {

    books: Observable<Book[]>;
    public _books: BehaviorSubject<Book[]>;
    public baseUrl: string;
    private booksStore: {
        books: Book[]
    };

    book: Observable<Book[]>;
    public _book: BehaviorSubject<Book[]>;
    public bookStore: {
        book: Book [];
    };

    constructor(private http: Http){

        this.baseUrl="http://localhost:3000";
        this.booksStore = {books: []};
        this._books = <BehaviorSubject<Book[]>> new BehaviorSubject([]);
        this.books = this._books.asObservable();

        this.bookStore = {book: []};
        this._book = <BehaviorSubject<Book[]>> new BehaviorSubject([]);
        this.book = this._book.asObservable();
    }

    getAPIBooks() {
        this.http.get(`${this.baseUrl}/books`)
            .map(response => response.json())
            .subscribe(data => {
                    this.booksStore.books = data;
                    this._books.next(Object.assign({}, this.booksStore).books);
                },
                error => {
                    console.log(error);
                });
    }

    getAPIBook(bookId:number) {
        this.http.get(`${this.baseUrl}/books/${bookId}`)
            .map(response => response.json())
            .subscribe(data => {
                this.bookStore.book = data;
                this._book.next(Object.assign({}, this.bookStore).book);
            },
            error => {
                console.log(error);
            })
    }

    removeAPIBook(bookId: number) {
        this.http.delete(`${this.baseUrl}/books/${bookId}`, {headers: customHeader})
            .subscribe(response => {
                this.booksStore.books.forEach((b, i) => {
                    if(b.id === bookId) {
                        this.booksStore.books.splice(i ,1);
                    }

                    this._books.next(Object.assign({}, this.booksStore).books);
                })
            },
            error => {
                console.log(error)
            })
    }

    addAPIBook(bookAdded) {
        this.http.post(`${this.baseUrl}/books`, JSON.stringify(bookAdded), {headers: customHeader})
            .map(response => response.json())
            .subscribe(data => {
                    this.booksStore.books.push(data);
                },
                error => {
                    console.log(error);
                });
    }

    updateAPIBook(book, bookId: number){
        this.http.put(`${this.baseUrl}/books/${bookId}`, JSON.stringify(book), {headers: customHeader})
            .map(response => response.json())
            .subscribe(data => {
                this.bookStore.book = data;

                this._book.next(Object.assign({}, this.bookStore).book);
            },
            error => {
                console.log(error);
            })
    }
}