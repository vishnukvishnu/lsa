import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeUpdate} from './home-update.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { NgxGalleryModule } from 'ngx-gallery';

import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NominationsComponent } from './nominations/nominations.component';
import { HeaderComponent } from './header/header.component';
import { CitationsComponent } from './citations/citations.component';
import { ProfileCitationComponent } from './profile-citation/profile-citation.component';
import { MyCitationsComponent } from './my-citations/my-citations.component';
import { MyTenureComponent } from './my-tenure/my-tenure.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SitationSuccessComponent } from './pop-ups/sitation-success/sitation-success.component';
import { SelfCitationsComponent } from './pop-ups/self-citations/self-citations.component';
import { ImgGalleryComponent } from './pop-ups/img-gallery/img-gallery.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PendingCitationsComponent } from './pending-citations/pending-citations.component';
import { CompletedCitationsComponent } from './completed-citations/completed-citations.component';
import { MyNominatiosService } from './services/my-nominatios.service';
import { HttpClientModule } from '@angular/common/http';
import { CancelPopupComponent } from './pop-ups/cancel-popup/cancel-popup.component';
import { ConfettiAnimateComponent } from './confetti-animate/confetti-animate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    NominationsComponent,
    HeaderComponent,
    CitationsComponent,
    ProfileCitationComponent,
    MyCitationsComponent,
    MyTenureComponent,
    LandingPageComponent,
    SitationSuccessComponent,
    SelfCitationsComponent,
    ImgGalleryComponent,
    WelcomePageComponent,
    PendingCitationsComponent,
    CompletedCitationsComponent,
    CancelPopupComponent,
    ConfettiAnimateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    // NgxGalleryModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule,
    ImageCropperModule
  ],  
  entryComponents: [ SitationSuccessComponent, 
                     SelfCitationsComponent,
                     ImgGalleryComponent,
                     CancelPopupComponent   
  ],
  providers: [ { provide: MatDialogRef, useValue: {}, },
                 HomeUpdate,
                 MyNominatiosService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
