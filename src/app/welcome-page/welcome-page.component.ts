import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HomeUpdate } from '../home-update.service';
import { slideToRight } from '../route-animations';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [
    slideToRight()
  ]
})
export class WelcomePageComponent implements OnInit {
  isUpdated: boolean = true;
  isTrue: boolean = true;
  tenShow: boolean = false;
  user: string; 
  constructor(private router: Router,
    private userService: HomeUpdate) {
      this.userService.cast.subscribe(user => this.user = user);
     }


  ngOnInit() {
  }
  myNominations() {
    this.router.navigate(['./nominations']);
  }
  myTenure() {
    this.router.navigate(['./home/tenure']);
  }
  nextMilestone(){
    this.tenShow = true;
  }
  Milestone(){
    this.tenShow = false;
  }
}
