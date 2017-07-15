import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { AngularFireModule } from "angularfire2";
import { GalleryGridComponent } from './portfolio/gallery-grid/gallery-grid.component';
import { ProjectSectionComponent } from './portfolio/project-section/project-section.component';
import { FirebaseService } from "app/firebase-service/firebase.service";
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDj_1uZqjEYXy9qpQ6_PLU30IRrTLKALhQ",
  authDomain: "ilya-pisman.firebaseapp.com",
  databaseURL: "https://ilya-pisman.firebaseio.com",
  storageBucket: "ilya-pisman.appspot.com",
  messagingSenderId: "386960438365"
};

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  }
];






@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BottomNavComponent,
    GalleryGridComponent,
    ProjectSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
