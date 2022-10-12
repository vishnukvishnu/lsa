import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PendingCitationsService } from "../services/pending-citations.service";
import { slideToRight } from '../route-animations';

@Component({
  selector: 'app-pending-citations',
  templateUrl: './pending-citations.component.html',
  styleUrls: ['./pending-citations.component.scss'],
  animations: [
    slideToRight()
  ]
})
export class PendingCitationsComponent implements OnInit {

  pedingData: any = [];
  array = [1,2,3,4,5,6,7,8,9,10,11,12];
  citaiotns = [1,2,3,4,5];
  constructor(private router: Router,
              public pendingCitationsService: PendingCitationsService) { }


  ngOnInit() {
    
    this.pendingCitationsService.pendingCitations().subscribe(data =>{
      this.pedingData = data;
      console.log(this.pedingData);
    });
    
  }
  myCitations() {
    this.router.navigate(['./my-citations']);
    // this.router.navigate(['./home/citations']);
  }
  
}
