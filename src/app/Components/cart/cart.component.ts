import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/get-cart.service';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Map } from '@mui/icons-material';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [ CommonModule, RouterLink, FormComponent ],
})
export class CartComponent implements OnInit {
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
        this.data = result;
        console.log("data", this.data);
      }
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
    this.cartService.removeProductFromCart(userId, productId).pipe(
      switchMap(() => this.cartService.getCartProductsByUserId(userId))
    ).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("Item removed successfully", this.data);
      }
    );
  }

  increment(productId: any, quantity: any) {
    const userId: any = localStorage.getItem("userId");
    const newQuantity = quantity + 1;
    this.cartService.incrementProductQuantity(userId, productId, newQuantity).pipe(
      switchMap(() => this.cartService.getCartProductsByUserId(userId))
    ).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("Quantity incremented successfully", this.data);
      }
    );
  }

  decrement(productId: any, quantity: any) {
    const userId: any = localStorage.getItem("userId");
    const newQuantity = quantity - 1;
    this.cartService.decrementProductQuantity(userId, productId, newQuantity).pipe(
      switchMap(() => this.cartService.getCartProductsByUserId(userId))
    ).subscribe(
      (result: any) => {
        this.data = result[0].products;
        console.log("Quantity decremented successfully", this.data);
      }
    );
  }

  isCartEmpty(): boolean {
    return this.data.length === 0;
  }

    getTotalPrice(): number {
      return this.data.reduce((total: number, product: any) => total + (product.quantity * product.price)+20, 0);
    }
  getCartSubtotal(): number {
  return this.data.reduce((total: number, product: any) => total + (product.quantity * product.price), 0);
}
}
