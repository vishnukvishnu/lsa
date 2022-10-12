import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { DOCUMENT } from '@angular/common';

import {
  trigger,
  style,
  group,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  constructor(public router: Router,
             @Inject(DOCUMENT) private document: Document) { }
  title = 'LSA';

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

one(){
  this.router.navigate(['./home/welcome']);
}
two(){
  this.router.navigate(['./home/citations/pending-citations']);
}
three(){
  this.router.navigate(['./home/tenure']);
}
tenurRemoveActive(){
  if(this.document.getElementById("tenure-active").hasAttribute("routerlinkactive")){
    this.document.getElementById("myDIV").classList.remove('addActive');
 }
 }
 nomRemoeActive(){
  if(this.document.getElementById("nominie-active").hasAttribute("routerlinkactive")){
    this.document.getElementById("myDIV").classList.remove('addActive');
 }
 }
}
