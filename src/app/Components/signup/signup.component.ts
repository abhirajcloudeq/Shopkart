import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, HttpClientModule,RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
 public signupForm!: FormGroup;
 constructor(private formbuilder : FormBuilder, private http:HttpClient, private router:Router) {}
 ngOnInit(): void {
  this.signupForm = this.formbuilder.group({
    Firstname: [''],
    Lastname: [''],
    Email: ['', Validators.email],
    Password: ['', Validators.minLength(8)],
   })

 }
 signup() {
  console.log('Form data:', this.signupForm.value);
  this.http.post<any>("http://172.31.1.135:8000/api/v1/signup", {firstName: this.signupForm.value.Firstname, email: this.signupForm.value.Email, lastName: this.signupForm.value.Lastname, password: this.signupForm.value.Password} )
    .subscribe(res => {
      console.log('Response:', res);
      alert("signup successful");
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }, err=>{
      console.log('Error:', err);
    }
   )

}
}