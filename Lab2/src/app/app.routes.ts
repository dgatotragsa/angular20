import { Routes } from '@angular/router';
import { ClubMain } from './features/clubMain/clubMain';
import { About } from './features/about/about';


export const routes: Routes = [
  {
    path:"main",
    component: ClubMain
  },
  {
    path:"about",
    component: About
  },
  {
    path:"",
    redirectTo:"main",
    pathMatch: "full"
  },
  {
    path:"**",
    redirectTo:"main",
  }
];
