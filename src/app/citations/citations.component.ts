import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { slideToRight } from '../route-animations';

import {
  trigger,
  style,
  group,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.scss'],  
  animations: [
    slideToRight()
  ]
  // animations: [
  //   trigger('myAnimation', [
  //     transition('* => *', [
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%'
  //         })
  //       ], { optional: true }),
  //       query(':enter', [
  //         style({ left: '-100%'})
  //       ],  { optional: true }),
  //       group([
  //         query(':leave', [
  //           animate('400ms ease', style({ left: '100%'}))
  //         ], { optional: true }),
  //         query(':enter', [
  //           animate('400ms ease', style({ left: '0%'}))
  //         ],  { optional: true })
  //       ] ),
  //     ])
  //   ])
    
  //     ] 
})
export class CitationsComponent implements OnInit {
  array = [1,2,3,4,5,6,7,8,9,10,11,12];
  citaiotns = [1,2,3,4,5];
  constructor(private router: Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    if(this.router.url != "/home/citations/completed-citations"){
      // this.document.getElementById("myDIV").classList.remove('addActive');
      this.document.body.classList.remove('addActive');
    }
  }
  // addACtive(){
  //   console.log(this.router.url);
  //   if(this.router.url == "/home/citations/completed-citations"){
  //     this.document.body.classList.add('addActive');
  //   }
//   }
       addACtive(){
        if(this.document.getElementById("pending-active").hasAttribute("routerlinkactive")){
           this.document.getElementById("myDIV").classList.add('addActive');
        }
       }
       removeActive(){
        if(this.document.getElementById("pending-active").hasAttribute("routerlinkactive")){
          this.document.getElementById("myDIV").classList.remove('addActive');;
       }
       }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
//   yourFn($event){
//     if($event.index == 0){
//       this.router.navigate(['./home/pending-citations']);
//     }
//     if($event.index == 1){
//       this.router.navigate(['./home/completed-citations']);
//     }
// }

}
