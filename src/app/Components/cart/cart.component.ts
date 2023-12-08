import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    imports: [CommonModule]
})
export class CartComponent {
  quantity = 1; 

  increment = function(quantity:any) {
    quantity++;
  };
  
  decrement = function(quantity:any) {
    if (quantity > 1) {
      quantity--;
    }
  };

}
