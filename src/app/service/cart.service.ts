// cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://172.31.1.135:8001/api/v1/add-cart';

  constructor(private http: HttpClient) {}

  addToCart(item: any): Observable<any> {
    const accessToken  = localStorage.getItem("access_token");
    // console.log("accessToken", accessToken)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const options = { headers: headers };

    return this.http.post<any>(this.apiUrl,options, item);
  }
}
