import {Routes} from "@angular/router";
import {BookListComponent} from "../../components/books/book-list/book-list.component";
import {BookPageComponent} from "../../components/books/book-page/book-page.component";

export const bookRoutes: Routes = [
    {path: '', component: BookListComponent},
    {path: ':id', component: BookPageComponent}
];