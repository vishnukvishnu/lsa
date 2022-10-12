import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SitationSuccessComponent } from '../pop-ups/sitation-success/sitation-success.component';
import { ImgGalleryComponent } from '../pop-ups/img-gallery/img-gallery.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-my-citations',
  templateUrl: './my-citations.component.html',
  styleUrls: ['./my-citations.component.scss']
})
export class MyCitationsComponent implements OnInit {

  markers:any = [];
  isHide: boolean = true;
  updatedImage: any = "../../assets//images/profile-black.jpg";
  profileImg = "";
  fileUpload: File = null;
  imgUrl: String = "../../assets//images/profile-black.jpg";
  img1: String = "../../assets//images/profile.png";
  img2: String = "../../assets//images/profile-black.jpg";
  img3: String = "../../assets//images/profile.png";
  updatedImageGallery:any = [];
  imgCount:number;

    //  Image  cropper 

    @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    showCropper = false;
    cropHide:boolean = false;
    imgHide: boolean = false;

  constructor(private router: Router,
              public dialog: MatDialog,) { }

  ngOnInit() {
    if(this.profileImg){
      this.isHide = false;
    }
  }
  home(){
    this.router.navigate(['./home/citations/pending-citations']);
  }
  sitationSuccess(){
    let dialogRef = this.dialog.open(SitationSuccessComponent, {
      width: '500px',
    });
  }
  
  handleFileInput(file: FileList) {
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
        this.updatedImage = result;
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
    this.updatedImageGallery.shift();
    this.imgCount = this.updatedImageGallery.length;
  }

 // Image  cropper 

fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;

  this.cropHide = true;
}
imageCropped(event: ImageCroppedEvent) {
this.croppedImage = event.base64;
console.log(event);
}
imageLoaded() {
this.showCropper = true;
 console.log('Image loaded')
}
cropperReady() {
console.log('Cropper ready')
}
loadImageFailed () {
console.log('Load failed');
}

flipVertical() {
  this.imageCropper.crop();
  this.showCropper = false;
  this.cropHide = false;
  this.imgHide = true;
}
}
