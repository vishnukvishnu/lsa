import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HomeUpdate } from '../home-update.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isUpdated: boolean = true;
  isTrue: boolean = true;
  user: string;
  constructor(private router: Router,
              private userService: HomeUpdate) {
                this.userService.cast.subscribe(user => this.user = user);
               }

  ngOnInit() {
  }
  viewCitations(){
    
  }
  myNominations() {
    this.router.navigate(['./nominations']);
  }
  yourFn($event){
    if($event.index){
      this.router.navigate(['./home/citations']);
    }
}

}
