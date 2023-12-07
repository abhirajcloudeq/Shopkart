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
   
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjE0LCJpYXQiOjE3MDE5MzU2OTUsImV4cCI6MTcwMTkzOTI5NX0.n3lPa77bG2x2acEtqSgZnMD_GpH8I1ejC-39ei9IX5M'; 
    // const accessToken  = localStorage.getItem("access-token")
    // console.log("accessToken", accessToken)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`,
    });

    const options = { headers: headers };

    let data =  this.http.get(this.apiUrl, options);
    console.log("data" , data)
    return data
    
  }
  
}
