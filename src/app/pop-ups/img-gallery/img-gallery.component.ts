import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ElementRef } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})
export class ImgGalleryComponent implements OnInit {
    // galleryOptions: NgxGalleryOptions[];
    // galleryImages: NgxGalleryImage[];
    isHide: boolean = true;
    testArray: any = [];
    StoredValue: any = [];
    updateImage:any;
    a:any;
    b:any = "https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg";
    c:any = "https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg";
    d:any = "https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg";
   
    msgShow:boolean = false;
    deleteShow: boolean = false;
    deleteValue:any;
  
  constructor(public thisDialogRef: MatDialogRef<ImgGalleryComponent>,
              @Inject(MAT_DIALOG_DATA) public markers: any,
              private elRef:ElementRef,
              ) {
                this.testArray = JSON.parse(localStorage.getItem("array"));
                if(!this.testArray) {
                  this.testArray=[];
                }
                this.testArray.push(this.markers[0].img)
              
                localStorage.setItem("array", JSON.stringify(this.testArray));
                
                this.a = this.testArray[0];
                let list =[];                
                this.testArray.forEach( (element) => {                 
                  //this.galleryImages.push({small: element,medium:element,big:element})
                  list.push({small: element,medium:element,big:element})
                  
              });
            
              // this.galleryImages = list;
              
               }

  ngOnInit() {  

  //   this.galleryOptions = [
  //     {
  //         width: '975px',
  //         height: '550px',
  //         thumbnailsColumns: 9,
  //         thumbnailsArrows:false,
  //         preview:false,
  //         arrowPrevIcon:'fa fa-angle-left',
  //         arrowNextIcon:'fa fa-angle-right',
  //         imageAnimation: NgxGalleryAnimation.Slide,
  //         // imageActions: [{icon: 'fa fa-trash', onClick: this.deleteImage.bind(this), titleText: 'delegfgdfgfdte'}]
  //     }
  // ];

  }
  onclose() {
    this.thisDialogRef.close();
  }
  
  onChange(data: any): void {
    this.updateImage = data.image.big;
    this.deleteValue = data.index;
  }

  updateProfile() {
    if(!this.updateImage) {
      // this.updateImage = this.galleryImages[0].big;
      }      
      this.thisDialogRef.close(this.updateImage);
  }

  isHided(){
    this.isHide = false;
    this.elRef.nativeElement.querySelector('.ngx-gallery-icons-wrapper').remove();
  }
  
  // deleteImage(){
  //   this.galleryImages.splice(this.deleteValue, 1);
  // }

  deleteShowHide(){
    this.deleteShow = true;
  }
  msgShowHide(){
    this.msgShow = true;
  }

}
