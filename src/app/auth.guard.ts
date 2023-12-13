// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/authentication.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authenticateService: AuthService, private router: Router) {}
   isLoggedIn = localStorage.getItem("isLoggedIn")
  canActivate(): boolean {
    debugger
    
    if (this.authenticateService.isLoggedIn=true) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}