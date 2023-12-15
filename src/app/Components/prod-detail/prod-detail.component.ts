// prod-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../Interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone:true,
  templateUrl: './prod-detail.component.html',
  imports: [CommonModule]
})
export class ProductDetailComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
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