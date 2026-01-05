import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';
import { JoinComponent } from './components/join/join.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join', component: JoinComponent }
];
