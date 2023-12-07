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
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0LCJpYXQiOjE3MDE5NTcxMDgsImV4cCI6MTcwMTk2MDcwOH0._5Yjg1YQ_1bt45OGjzADCx0MmG0KrcOwmPwjhbi7mkI'; 
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
