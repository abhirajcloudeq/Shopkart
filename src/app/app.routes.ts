import { Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { Home2Component } from './Components/home2/home2.component';
import { ProductDetailComponent } from './Components/prod-detail/prod-detail.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

import { DetailsComponent } from './Components/details/details.component';
import { CartComponent } from './Components/cart/cart.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: '', component: Home2Component
    },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    
    },

    {
        path: 'login', component: HomeComponent
    },

    {
        path: 'category/:id', component: ProductDetailComponent
    },
    {
        path: 'about', component: AboutComponent

    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'product/:id', component: DetailsComponent
    },
    {
        path: 'Cart', component: CartComponent
    }

];


