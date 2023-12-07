import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/productdescription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../../Interface/products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductDetailComponent } from "../prod-detail/prod-detail.component";
@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [CommonModule,  ProductDetailComponent]
})
export class DetailsComponent implements OnInit {
 product!: Product ;
    // Your product data here
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id']; 
      this.productService.getProductById(productId).subscribe(
        (data) => {
          this.product = data.data;
          console.log('this is the product details : ', this.product);

        },
      );
    });

  
}
}
