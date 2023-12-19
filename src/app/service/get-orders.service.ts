import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {
  private url = 'http://172.31.1.135:8002/api/v1/orders/get-orders';

  constructor(private http: HttpClient) {}

  getOrders(userId: string): Observable<any> {
    const accessToken = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const payload = { userId: userId };

    return this.http.post(this.url, payload, { headers: headers });
  }
}

