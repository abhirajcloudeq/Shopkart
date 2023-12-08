// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interface/products';
import { Response } from '../Interface/response';

@Injectable({
  providedIn: 'root',
})
export class ProductCategories {
  private apiUrl = 'http://172.31.1.135:7001/api/v1/products/categories';

  constructor(private http: HttpClient) {}

  getProductById(productId: string): Observable<Response> {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIxLCJpYXQiOjE3MDIwNTAzMjMsImV4cCI6MTcwMjA1MzkyM30.u_7jOi1Gth_SbBFRmjeKHL7MAgB1POxm06Qq92-c_-k'; 
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
