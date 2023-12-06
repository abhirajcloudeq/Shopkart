// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://172.31.1.135:7001/api/products/categories';

  constructor(private http: HttpClient) {}

  getProducts(category?: string): Observable<any[]> {
    let params = new HttpParams();
    debugger

    return this.http.get<any[]>(this.apiUrl + `/${category}`);
  }
}
