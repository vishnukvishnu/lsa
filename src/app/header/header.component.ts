import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profieVissible: boolean;
  notificationVissible: boolean;
  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  home() {
    this.router.navigate(['./landing']);
  }
  profieOverlayHide() {
    this.profieVissible = !this.profieVissible;
    this.document.body.classList.remove('fiter-scroll');
  }
  notificationOverlayHide() {
    this.notificationVissible = !this.notificationVissible;
    this.document.body.classList.remove('fiter-scroll');
  }
  profielOvelay(){
    this.profieVissible = true;
    this.document.body.classList.add('fiter-scroll');
  }
  notificationOverlay(){
    this.notificationVissible = true;
    this.document.body.classList.add('fiter-scroll');
  }

  Tocitations(){
    this.router.navigate(['./home/citations/pending-citations']);
    this.notificationVissible = false;
  }
}
