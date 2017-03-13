import {Component} from "@angular/core";

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.template.html',
    styleUrls: ['navbar.style.css'],
    inputs: ['title'],
    outputs: ['addBook']
})

export class NavbarComponent {

}