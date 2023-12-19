import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/get-cart.service';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Map } from '@mui/icons-material';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [ CommonModule,RouterLink,FormComponent],


})
export class CartComponent implements OnInit {
  getTotalPrice(): number {
    return this.data?.reduce((total: any, product: { price: any; }) => total + product.price, 0);
  }
  data: any = [];
  quantity = 0;
  showForm: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const userId: any = localStorage.getItem("userId");

    this.cartService.getCartProductsByUserId(userId).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("data", this.data);
      },

    );
  }

  proceedToCheckout() {
    this.showForm = !this.showForm;
  }

  toggleModal() {
    this.showForm = !this.showForm;
  }


  removeItem(productId: string) {
    const userId: any = localStorage.getItem("userId");

    this.cartService.removeProductFromCart(userId, productId).subscribe(
      (result: any) => {
        console.log("Item removed successfully");
      },

    );

    this.cartService.getCartProductsByUserId(userId).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("data", this.data);
      },

    );
  }



  increment(productId: any, quantity: any) {
    const userId: any = localStorage.getItem("userId");
    const newQuantity = quantity + 1;

    this.cartService.incrementProductQuantity(userId, productId, newQuantity).subscribe(
      (result: any) => {
        this.data = result.products;
        console.log("Quantity incremented successfully", this.data);
      },

    );

    this.cartService.getCartProductsByUserId(userId).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("data", this.data);
      },

    );
  }

  decrement(productId: any, quantity: any) {
    const userId: any = localStorage.getItem("userId");
    const newQuantity = quantity - 1;
    this.cartService.decrementProductQuantity(userId, productId, newQuantity).subscribe(
      (result: any) => {
        this.data = result.products;
        console.log("Quantity decremented successfully", this.data);
      },

    );
    this.cartService.getCartProductsByUserId(userId).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("data", this.data);
      },

    );

  }
  isCartEmpty(): boolean {
    return this.data.length === 0;
  }


}