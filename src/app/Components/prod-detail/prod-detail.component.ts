// prod-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { TruncatePipe } from '../../truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone:true,
  templateUrl: './prod-detail.component.html',
  imports: [CommonModule,TruncatePipe,RouterLink]
})
export class ProductDetailComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService 
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

  
  addToCart(product: any) {
    const itemToAdd = {
      userId: Number(localStorage.getItem("userId")),
      productId: product.id,
      quantity: 1,
    }
    
    this.cartService.addToCart(itemToAdd).subscribe(
      (response: any) => {
        console.log('Item added to cart successfully:', response);
      }
    );
  }
  
}