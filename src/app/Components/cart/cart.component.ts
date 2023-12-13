import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    RouterModule,
    FormComponent,
  ],
})
export class CartComponent implements OnInit {

  data: any = {};
  quantity = 0;
  showForm: boolean = false;

 

  constructor(private httpclient: HttpClient) {
    this.data = [];
  }

  ngOnInit(): void {
    this.getproducts();
    throw new Error('Method not implemented.');
  }

  getproducts() {
    this.httpclient
      .get('http://localhost:3000/data')
      .subscribe((result: any) => {
        console.log(result);
        this.data = result.userId.products;
        console.log(this.data)
      });
  }


  proceedtocheckout() {
    this.showForm = !this.showForm;
  }

  toggleModal() {
    this.showForm = !this.showForm;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  removeitem() {
    alert('are you sure want to remove item?');
  }
}
