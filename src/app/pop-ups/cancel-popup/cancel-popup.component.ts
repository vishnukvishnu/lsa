import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Router} from '@angular/router';
import { HomeUpdate } from '../../home-update.service'
@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.scss']
})
export class CancelPopupComponent implements OnInit {
  isTrue: boolean = false;
  user: string;
  constructor(public thisDialogRef: MatDialogRef<CancelPopupComponent>,
              private router: Router,
              private userService: HomeUpdate) { }

  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
  }

  updatehome() {
    this.isTrue = true;
    this.userService.editUser(this.isTrue);
    this.thisDialogRef.close();
    this.router.navigate(['./home/welcome']);
  }

  onclose() {
    this.thisDialogRef.close();
  }
  home() {
    this.thisDialogRef.close();
    this.router.navigate(['./home/welcome']);
  }
}