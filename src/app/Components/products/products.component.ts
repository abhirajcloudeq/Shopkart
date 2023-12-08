import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../prod-detail/prod-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductDetailComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

}
