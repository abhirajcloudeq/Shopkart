import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Home2Component } from '../home2/home2.component';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RouterLink,MatIconModule,ReactiveFormsModule,HttpClientModule,Home2Component],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
selectCategory(arg0: any) {
throw new Error('Method not implemented.');
}
  public loginform!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    this.http.get<any>('http://172.31.1.135:8000/api/v1/login').subscribe(
      (res: any) => {
        console.log("response", res[2]);
          const user = res.find((a: any) => {
        // console.log(a)
          console.log(a.Password, a.Email, this.loginform.value.username, this.loginform.value.password)
          return a.Email === this.loginform.value.username && a.password === this.loginform.value.Password;
        });

        if (user) {
          alert('Welcome!');
          this.loginform.reset();
          this.router.navigate(['home2']);
        } else {
          alert('Invalid credentials');
        }
      },
    );
  }
}
