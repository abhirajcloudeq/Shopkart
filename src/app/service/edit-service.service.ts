// edit.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private apiUrl = 'http://172.31.1.135:8000/api/v1/update-user';
  
  constructor(private http: HttpClient) { }

  updateDetails(data: any, userId: number): Observable<any> {
    const accessToken = localStorage.getItem("access_token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `x${accessToken}`,
    });

    return this.http.put(`${this.apiUrl}/${userId}`, data, { headers: headers }); 
  }
}
