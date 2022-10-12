import { Component, OnInit, Inject } from '@angular/core';
import { Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { slideToRight } from '../route-animations';

@Component({
  selector: 'app-completed-citations',
  templateUrl: './completed-citations.component.html',
  styleUrls: ['./completed-citations.component.scss'],
  animations: [
    slideToRight()
  ]
})
export class CompletedCitationsComponent implements OnInit {
  array = [1,2,3,4,5,6,7,8,9,10,11,12];
  citaiotns = [1,2,3,4,5];
  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  profileCitations() {
    this.router.navigate(['./profile-citations']);
  }

}
