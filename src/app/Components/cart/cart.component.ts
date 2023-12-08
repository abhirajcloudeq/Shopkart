import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,NavBarComponent,FooterComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {

}
