import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://172.31.1.135:8001/api/v1/get-cart';
  private Url = 'http://172.31.1.135:8001/api/v1/delete-cart';
  private updateUrl = 'http://172.31.1.135:8001/api/v1/update-cart';

  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCartProductsByUserId(userId: string): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const options = { headers: headers };
    const url = `${this.apiUrl}`;

    const payload = { userId: userId };

    return this.http.post(url, payload, options);
  }

  removeProductFromCart(userId: string, productId: string): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const options = { headers: headers };
    const url = `${this.Url}`;

    const payload = {
      userId: localStorage.getItem('userId'),
      productId: productId,
    };

    return this.http
      .request('delete', url, { body: payload, headers: options.headers });
  }

  incrementProductQuantity(userId: string, productId: string, quantity: number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: ` ${accessToken}`,
    });

    const options = { headers: headers };
    const url = `${this.updateUrl}`;

    const payload = {
      userId: userId,
      productId: productId,
      quantity: quantity,
    };

    return this.http.patch(url, payload, options);
  }

  decrementProductQuantity(userId: string, productId: string, quantity: number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: ` ${accessToken}`,
    });

    const options = { headers: headers };
    const url = `${this.updateUrl}`;

    const payload = {
      userId: userId,
      productId: productId,
      quantity: quantity,
    };

    return this.http.patch(url, payload, options);
  }

  updateData(data: any) {
    this.dataSubject.next(data);
  }
}
