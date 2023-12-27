import { Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { Home2Component } from './Components/home2/home2.component';
import { ProductDetailComponent } from './Components/prod-detail/prod-detail.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

import { DetailsComponent } from './Components/details/details.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderedProductsComponent } from './Components/ordered-products/ordered-products.component';
import { authGuard } from './auth.guard';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { OrdersComponent } from './Components/ordered-products/orders/orders.component';
import { ProfileComponent } from './Components/profile/profile.component';
export const routes: Routes = [
    {
        path: 'signup', component: SignupComponent,
    },
    {
        path: '', component: Home2Component,canActivate: [authGuard]
    },
    {
        path: 'login', component: HomeComponent,
    },

    {
        path: 'category/:id', component: ProductDetailComponent, canActivate: [authGuard]
    },
    {
        path: 'about', component: AboutComponent, canActivate: [authGuard]

    },
    {
        path: 'contact', component: ContactComponent, canActivate: [authGuard]
    },
    {
        path: 'product/:id', component: DetailsComponent, canActivate: [authGuard]
    },
    // {
    //    path: 'item/:id' , component: DetailsComponent , canActivate: [authGuard]
    // },
    
    {
      path: 'order/:id' , component: OrdersComponent , canActivate : [authGuard]
    },
    {
        path: 'Cart', component: CartComponent,canActivate: [authGuard]
    },
    {
        path: 'order', component:OrderedProductsComponent,canActivate: [authGuard]
    },

    { path: 'navbar', component: NavBarComponent, outlet: 'navbar' },
    {
        path: 'profile', component:ProfileComponent, canActivate: [authGuard]
    }

];


