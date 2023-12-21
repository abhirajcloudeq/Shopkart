import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn$.getValue()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
