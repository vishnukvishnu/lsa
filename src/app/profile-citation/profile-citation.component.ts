import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-citation',
  templateUrl: './profile-citation.component.html',
  styleUrls: ['./profile-citation.component.scss']
})
export class ProfileCitationComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  home(){
    this.router.navigate(['./home/citations/completed-citations']);
  }
}
