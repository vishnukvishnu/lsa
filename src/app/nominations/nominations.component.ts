import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ImgGalleryComponent } from '../pop-ups/img-gallery/img-gallery.component';
import { SelfCitationsComponent } from '../pop-ups/self-citations/self-citations.component';
import { MyNominatiosService } from '../services/my-nominatios.service';
import { CancelPopupComponent } from '../pop-ups/cancel-popup/cancel-popup.component';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {
     filteredOptions = ["vishu","ram", "alex", "akash", "Goutham"];
     imgArray: any = [];
     markers:any = [];
     updatedProfileImage: any = "../../assets//images/profile-black.jpg";
     updatedMemmoryImage:any = "../../assets//images/profile-black.jpg";
     updatedImageGallery:any = [];
     imgCount:number;

     nomineData: any = []; 
     isHide: boolean = true;
     editable: boolean = true;
     fileUpload: File = null;
     profileImg = "";
     memmoryImg = "";
     imgUrl: String = "../../assets//images/profile-black.jpg";
     img1: String = "../../assets//images/profile.png";
     img2: String = "../../assets//images/profile-black.jpg";
     img3: String = "../../assets//images/profile.png";
  constructor(private router: Router,
               public dialog: MatDialog,
               public myNominatiosService: MyNominatiosService) { }
                  
    ngOnInit() {
      if(this.profileImg){
        this.isHide = false;
      }

      this.myNominatiosService.nominieNames().subscribe(data =>{
        this.nomineData = data;
      });

    }

      home() {
        this.router.navigate(['./home/welcome']);
      }

      imgGallery(){
        let dialogRef = this.dialog.open(ImgGalleryComponent, {
          width: '80%',
        });
      }

      editNomination() {
        this.editable = false;
      }

      updateNomination(){
        let dialogRef = this.dialog.open(SelfCitationsComponent, {
          width: '465px',
        });
      }
      CancelPopup(){
        let dialogRef = this.dialog.open(CancelPopupComponent, {
          width: '445px',
        });
      }


      ProfilehandleFileInput(file: FileList) {
        this.fileUpload = file.item(0);

        //show image preview

        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.profileImg = event.target.result;
          this.markers=[];
          this.markers.push({ 'img': this.profileImg, })
          let dialogRef = this.dialog.open(ImgGalleryComponent, {
            width: '75%',
            data: this.markers
          });

          dialogRef.afterClosed().subscribe(result =>{
            this.updatedProfileImage = result;
          })
        }
        reader.readAsDataURL(this.fileUpload);
      }

      MemmaroyhandleFileInput(file: FileList) { 
        this.fileUpload = file.item(0);

        //show image preview

        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.memmoryImg = event.target.result;
          this.markers=[];
          this.markers.push({ 'img': this.memmoryImg, })
          let dialogRef = this.dialog.open(ImgGalleryComponent, {
            width: '75%',
            data: this.markers
          });

          dialogRef.afterClosed().subscribe(result =>{
            this.updatedMemmoryImage = result;
            this.updatedImageGallery.push(result);
            this.imgCount = this.updatedImageGallery.length;
            if(this.imgCount > 4) {
              this.updatedImageGallery.shift();
            }
          })
        }
        reader.readAsDataURL(this.fileUpload);
      }
     
      delteImage(){
        this.updatedImageGallery.pop();
        this.imgCount = this.updatedImageGallery.length;
      }
}
