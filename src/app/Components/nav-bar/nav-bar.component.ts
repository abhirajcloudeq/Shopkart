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
  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    localStorage.removeItem("userId"),
      localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
  }

}
