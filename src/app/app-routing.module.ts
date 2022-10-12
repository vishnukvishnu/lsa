import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NominationsComponent } from '../app/nominations/nominations.component';
import { ProfileCitationComponent} from '../app/profile-citation/profile-citation.component';
import { MyCitationsComponent } from '../app/my-citations/my-citations.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { CitationsComponent } from '../app/citations/citations.component';
import { MyTenureComponent } from '../app/my-tenure/my-tenure.component';
import { WelcomePageComponent } from '../app/welcome-page/welcome-page.component';
import { PendingCitationsComponent } from '../app/pending-citations/pending-citations.component';
import { CompletedCitationsComponent } from '../app/completed-citations/completed-citations.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path: 'home', component: HomeComponent}, 
  {path: 'nominations', component: NominationsComponent}, 
  {path: 'profile-citations', component: ProfileCitationComponent},
  {path: 'my-citations', component: MyCitationsComponent},
  {path: 'landing', component: LandingPageComponent,  data: {animation: 'landing'}},
  {path: 'home/citations', component: CitationsComponent, 
  children: [
    {path: 'pending-citations', component: PendingCitationsComponent, data: {animation: 'citations'},},  
    {path: 'completed-citations', component: CompletedCitationsComponent},    
  ]  
  },  
  {path: 'home/tenure', component: MyTenureComponent, data: {animation: 'tenure'}},
  {path: 'home/welcome', component: WelcomePageComponent, data: {animation: 'welcome'} }, 



  // {path: 'home/citations', component: CitationsComponent,
  // children: [
  //   {path: 'pending-citations', component: PendingCitationsComponent,  data: {animation: 'isRight'}},  
  //   {path: 'completed-citations', component: CompletedCitationsComponent, data: {animation: 'isLeft'}},    
  // ]  
  // },  
  // {path: 'home/tenure', component: MyTenureComponent, data: {animation: 'isRight'}},
  // {path: 'home/welcome', component: WelcomePageComponent, data: {animation: 'isLeft'}}, 
  
    
];
ProfileCitationComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  HomeComponent,
                                    NominationsComponent,
                                    ProfileCitationComponent,
                                    MyCitationsComponent,
                                    LandingPageComponent,
                                    CitationsComponent,
                                    MyTenureComponent,
                                    WelcomePageComponent

]

