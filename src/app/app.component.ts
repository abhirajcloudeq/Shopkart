import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SignupComponent } from './Components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup } from '@mui/material';
import { NgModel } from '@angular/forms';
import { Home2Component } from './Components/home2/home2.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProductDetailComponent } from './Components/prod-detail/prod-detail.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,MatIconModule,RouterModule,SignupComponent,Home2Component,FooterComponent,CartComponent,NavBarComponent,ProductDetailComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Shopkart';
  constructor() {
    // debugger;
  }


 }

  
