import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://172.31.1.135:8002/api/v1/orders/create-order';

  constructor(private http: HttpClient) {}

  placeOrder(orderDetails: any): Observable<any> {
    const accessToken = localStorage.getItem("access_token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });

    const options = { headers: headers };

    return this.http.post<any>(this.apiUrl, orderDetails, options);
  }
}
