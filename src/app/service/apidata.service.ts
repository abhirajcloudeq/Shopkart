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
   
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIxLCJpYXQiOjE3MDIwNTAzMjMsImV4cCI6MTcwMjA1MzkyM30.u_7jOi1Gth_SbBFRmjeKHL7MAgB1POxm06Qq92-c_-k'; 
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
