import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AuthService } from '../../service/authentication.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.isLoggedIn$.subscribe(value => {
      this.isLoggedIn = value;
    });
  }
   
  
  logout() {
    this.authService.isLoggedIn$.next(false);  
    this.authService.logout();
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  
}