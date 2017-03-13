import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {BookDetailsComponent} from "./components/books/book-details/book-details.component";
import {BookPageComponent} from "./components/books/book-page/book-page.component";
import {RouterModule} from "@angular/router";
import {bookRoutes} from "./common/routes/book.routes";
import {AddBookComponent} from "./components/books/add-book/add-book.component";
import {EditBookComponent} from "./components/books/edit-book/edit-book.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    BookDetailsComponent,
    BookPageComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(bookRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
