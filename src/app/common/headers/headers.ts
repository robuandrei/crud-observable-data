import {Headers} from "@angular/http";

export const customHeader = new Headers();
customHeader.append('Accept', 'application/json');
customHeader.append('Content-Type', 'application/json');