import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderHistory } from '../Interface/order';
@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private apiUrl = 'http://172.31.1.135:8002/api/v1/orders/get-orders'; 
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    const accessToken  = localStorage.getItem("access_token");
    // console.log("accessToken", accessToken)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
    console.log(headers);

    const options = { headers: headers };

    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  getOrderHistory(orderId: number): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>(`${this.apiUrl}/orders/${orderId}/history`);
  }
}
