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
   
    const accessToken  = localStorage.getItem("access_token");
    // console.log("accessToken", accessToken)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
    console.log(headers);

    const options = { headers: headers };

    let data =  this.http.get(this.apiUrl, options);
    console.log("data" , data)
    return data
    
  }
  
}
