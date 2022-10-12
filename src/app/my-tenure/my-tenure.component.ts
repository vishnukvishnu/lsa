import { Component, OnInit, Inject} from '@angular/core';
import { slideToRight } from '../route-animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-my-tenure',
  templateUrl: './my-tenure.component.html',
  styleUrls: ['./my-tenure.component.scss'],
  animations: [
    slideToRight()
  ]
})
export class MyTenureComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }


}
