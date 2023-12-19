import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Home2Component } from '../home2/home2.component';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RouterLink,MatIconModule,ReactiveFormsModule,HttpClientModule,Home2Component],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public loginform!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    this.http.post<any>('http://172.31.1.135:8000/api/v1/login', {
      email: this.loginform.value.username,
      password: this.loginform.value.password
    }).subscribe(
      (res: any) => {
        console.log(res);
          localStorage.setItem("access_token", (res.accessToken))
          localStorage.setItem("refresh_token",(res.refreshToken))

        
          const accessToken  = localStorage.getItem("access_token");
          // console.log("accessToken", accessToken)
      
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `${accessToken}`,
          });
      
          const options = { headers: headers };
          console.log (options)
      
       
          this.http.get<any>('http://172.31.1.135:8000/api/v1/user/details', options).subscribe((res:any)=>{
            console.log(res)
            console.log (res.userDetails.userId)
            localStorage.setItem("userId" , (res.userDetails.userId))
            
          })


          alert('Login successful!');
          this.loginform.reset();
          console.log('Navigating to home2...');
          this.router.navigate(['/']);
      }
    );

  }
  
}
