// prod-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../products';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-product-detail',
  standalone:true,
  templateUrl: './prod-detail.component.html',
  imports: [CommonModule,TruncatePipe]
})
export class ProductDetailComponent implements OnInit {
addToCart(_t7: any) {
throw new Error('Method not implemented.');
}
truncateDescription(arg0: any,arg1: number) {
throw new Error('Method not implemented.');
}
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
