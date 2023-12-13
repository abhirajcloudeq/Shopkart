// cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://172.31.1.135:8001/api/v1/get-cart';

  constructor(private http: HttpClient) {}

  getCartProductsByUserId(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('userId');

    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });

    const options = { headers: headers };

    const url = `${this.apiUrl}`;

    const payload = { userId: userId };

    let data: Observable<any> = this.http.post(url, payload, options);

    data.subscribe(response => {
      console.log(response[0].products);
    });

    return data;
  }
}
