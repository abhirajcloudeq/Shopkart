// prod-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductCategories } from '../../service/product.service';
import { Product } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../truncate.pipe';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-product-detail',
  standalone:true,
  templateUrl: './prod-detail.component.html',
  imports: [CommonModule,TruncatePipe,RouterLink,NavBarComponent]
})
export class ProductDetailComponent implements OnInit {


  product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductCategories
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id']; 
      this.productService.getProductById(productId).subscribe(
        (data) => {
          console.log('Product Data:', data); 
          this.product = data.data.products;
        },
      );
    });
  }
  
}
