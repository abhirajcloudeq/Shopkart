import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { TruncatePipe } from '../../truncate.pipe';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../service/notification.service';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';

@Component({
  selector: 'app-product-detail',
  standalone:true,
  templateUrl: './prod-detail.component.html',
  imports: [CommonModule,TruncatePipe,RouterLink,CartPopupComponent]
})
export class ProductDetailComponent implements OnInit {
  product: Product[] = [];
  showPopup = false;
  popupMessage = '';


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService ,
    private notificationService:NotificationService
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
    this.popupMessage = 'Item added to cart!';
    this.showPopup = true;
    setTimeout(() => {
      this.closePopup();
    }, 1000);
    
    this.cartService.addToCart(itemToAdd).subscribe(
      (response: any) => {
        console.log('Item added to cart successfully:', response);
        this.notificationService.success('Item added to cart successfully!');

      }
    );
  }
  closePopup() {
    this.showPopup = false;
    this.popupMessage = '';
  }
}