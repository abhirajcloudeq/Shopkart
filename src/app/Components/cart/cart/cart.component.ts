import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CommonModule, NavBarComponent, FooterComponent]
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
