import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ProductListComponent } from './prod-detail/prod-detail.component';
export const routes: Routes = [
    {
        path:'signup',component: SignupComponent
        
        
    },
    {
        path:'',component:Home2Component
    },
    {
        path:'home2',component:Home2Component
    },
    {
        path:'login',component:HomeComponent
    },

{
    path:'category/:id' , component:ProductListComponent
}

];


