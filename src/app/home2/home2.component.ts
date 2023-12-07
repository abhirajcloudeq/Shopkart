 import { Component, OnInit,inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CategoryService} from '../service/apidata.service';
import { AppComponent } from '../app.component';
import { Category } from '../category';
import { FooterComponent } from '../footer/footer.component';
import { HttpHeaders } from '@angular/common/http'
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
    selector: 'app-home2',
    standalone: true,
    templateUrl: './home2.component.html',
    imports: [CommonModule, RouterModule, RouterLink, FooterComponent, NavBarComponent]
})
export class Home2Component implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router:Router) {}

  ngOnInit() {
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTcwMTY5Njc5MSwiZXhwIjoxNzAxNzAwMzkxfQ.9hroq0SnMbbhqaLgnLd4W_6tzt_txtaiergAIgU1kxU'; 

    // const headers = ?new HttpHeaders().set('authorization', `${accessToken}`);

    this.categoryService.getCategories().subscribe(
      (data) => {
        console.log("data" , data)
        this.categories = data.data;
      },
      
    );
  }
  
 
}
