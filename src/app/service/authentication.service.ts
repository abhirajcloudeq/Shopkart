import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://172.31.1.135:8000/api/v1/user/details';
  private tokenKey = 'access_token';
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(this.tokenKey) || ''}`,  // Fallback added
  });
  options = { headers: this.headers };

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient) {}

  private checkToken(): boolean {
    const token = localStorage.getItem(this.tokenKey) || '';  // Fallback added
    return !!token;
  }

  login() {
    this.isLoggedIn$.next(true);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }

  getUserDetails() {
    this.http.get<any>(this.apiUrl, this.options).subscribe(
      (res: any) => {
        if (res.userDetails && res.userDetails.userId) {
          localStorage.setItem(this.tokenKey, res.token);
          localStorage.setItem("userId", res.userDetails.userId);
          this.isLoggedIn$.next(true);
        } else {
          this.isLoggedIn$.next(false);
        }
      },
      
    );
  }
}
