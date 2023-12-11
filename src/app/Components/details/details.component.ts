import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServ} from '../../service/productdescription.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../../Interface/products';
import { ActivatedRoute, Route, Router, RouterLink, RouterModule } from '@angular/router';
import { ProductDetailComponent } from "../prod-detail/prod-detail.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { TruncatePipe } from '../../truncate.pipe';
import { ProductCategories } from '../../service/product.service';
import { NotificationService } from '../../service/notification.service';
import { NotificationComponent } from '../notification/notification.component';
import { CartService } from '../../service/cart.service';
@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    imports: [CommonModule,  ProductDetailComponent,NavBarComponent,FooterComponent,RouterLink,TruncatePipe,NotificationComponent]
})
export class DetailsComponent implements OnInit {
 product!: Product ;
 categoryId !: string;
 otherproducts!: Product[]


  constructor(private productService: ProductServ,
    private route: ActivatedRoute,
    private productCategories : ProductCategories,
    private notificationService: NotificationService,
    private router: Router,
    private cartService :CartService
    ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id']; 
      this.productService.getProductById(productId).subscribe(
        (data: { data: Product; }) => {
          this.product = data.data;
          
          this.categoryId = this.product.category_id.toString()
          console.log('this is the product details : ', this.product);

          this.productCategories.getProductById(this.categoryId).subscribe(
            (data) => {
              console.log('Product Data:', data); 
              this.otherproducts = data.data.products;
            },
          );

        },
      );
    });

  
}
addToCart(product:any){
  const itemToAdd = { 
    "userId" : '',
    "productId" : '',
    "quantity" : ''
  };

    this.cartService.addToCart(product).subscribe(
      (response) => {
        console.log('Item added to cart successfully:', response);
      },)}
}
