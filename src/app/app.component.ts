import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,MatIconModule,SignupComponent,RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Shopkart';
  constructor() {}


 }

  
