import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { HomeDetailPage } from './features/home/pages/home-detail-page/home-detail-page';

export const routes: Routes = [
    {
        path:'',
        component: HomeDetailPage
    },
    {
      path:'**',
      redirectTo:''  
    }
];
