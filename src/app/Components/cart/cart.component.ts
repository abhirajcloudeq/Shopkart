import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { OrderService } from '../../service/orders.service';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    imports: [CommonModule, NavBarComponent, FooterComponent, RouterModule]
})
export class CartComponent {
  products: any;

  constructor(private orderService: OrderService) {}

  placeorder(): void {
    const orderDetails: any = {
      userId: localStorage.getItem("userId"),
      address: '',
      contactNo: '',
      products: [],
    };

    this.orderService.placeOrder(orderDetails).subscribe(
      (res => {
        console.log(res);
      })
    );
  }

  quantity = 1;

  increment = function(quantity: any) {
    quantity++;
  };
  
  decrement = function(quantity: any) {
    if (quantity > 1) {
      quantity--;
    }
  };

  showForm: boolean = false;

  proceedtocheckout() {
    this.showForm = !this.showForm;
  }

  toggleModal() {
    this.showForm = !this.showForm;
  }

  removeitem() {
    alert('Are you sure you want to remove the item?');
  }
}
