// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interface/products';
import { JsonPipe } from '@angular/common';
import { Details } from '../Interface/details';

@Injectable({
  providedIn: 'root'
})
export class ProductServ {
  private apiUrl = 'http://172.31.1.135:7001/api/v1/products/get-one-product'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<Details> {
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIxLCJpYXQiOjE3MDIyODE1MzIsImV4cCI6MTcwMjI4NTEzMn0.yxIWQdO4vmDEimi3Rit5W2Vs7L3IHWPS2bOav_EEQt0'; 
    const accessToken  = localStorage.getItem("access_token")

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });
    const options = { headers: headers };
    const url = `${this.apiUrl}/${productId}`;
    var res =  this.http.get<Details>(url,options);
    return res
    
  }
}
