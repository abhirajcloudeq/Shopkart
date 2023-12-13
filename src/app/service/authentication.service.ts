import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://172.31.1.135:8000/api/v1/user/details';

  accessToken = localStorage.getItem("access_token");

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `${this.accessToken}`,
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient) {
    this.getUserDetails();
  }

  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getUserDetails() {
    this.http.get<any>(this.apiUrl, this.options).subscribe((res: any) => {
      console.log(res);
      
      if(res.userDetails.userId){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }

      localStorage.setItem("userId", res.userDetails.userId);
    });
  }
}
