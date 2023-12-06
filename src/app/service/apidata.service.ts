import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://172.31.1.135:7001/api/v1/products/all-categories';

  constructor(private http: HttpClient) {}


  getCategories(): Observable<any> {
    // Assuming you have an authentication token stored somewhere
    // const authToken = 'YOUR_AUTH_TOKEN';
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTcwMTg1MDU2MSwiZXhwIjoxNzAxODU0MTYxfQ.KEXHqayTarMjTF_2hfqjtXFg_85C00jT5hua3z2x7q4'; 
    // const accessToken  = localStorage.getItem("access-token")
    // console.log("accessToken", accessToken)

    // Set the Authorization header with the token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });

    // Pass the headers in the options parameter
    const options = { headers: headers };

    let data =  this.http.get(this.apiUrl, options);
    console.log("data" , data)
    return data
    
  }
  // getCategories(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
}
