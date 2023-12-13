import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../../service/get-cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    RouterModule,
    FormComponent,
  ],
})
export class CartComponent implements OnInit {
calculateTotal() :number{
  const shippingCharge = 20;

  const subtotal = this.cartProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return subtotal + shippingCharge;}

  data: any = {};
  quantity = 0;
  showForm: boolean = false;

  cartProducts: any[] = [];


  constructor(private http: HttpClient,private cartservice:CartService) {}  

  ngOnInit(): void {
    this.fetchCartProducts();

  }

  fetchCartProducts(): void {
    this.cartservice.getCartProductsByUserId().subscribe(
      (data) => {
        this.cartProducts = data[0].products;
      },
      
    );
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
