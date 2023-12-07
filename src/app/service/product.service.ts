// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products';
import { Response } from '../response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://172.31.1.135:7001/api/v1/products/categories';

  constructor(private http: HttpClient) {}

  getProductById(productId: string): Observable<Response> {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0LCJpYXQiOjE3MDE5MzU2OTUsImV4cCI6MTcwMTkzOTI5NX0.n3lPa77bG2x2acEtqSgZnMD_GpH8I1ejC-39ei9IX5M'; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });
    const options = { headers: headers };

    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Response>(url,options);
    ;
  }
}
