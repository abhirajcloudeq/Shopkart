import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServ } from '../../service/productdescription.service';
import { Product } from '../../Interface/products';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductDetailComponent } from "../prod-detail/prod-detail.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { TruncatePipe } from '../../truncate.pipe';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';
import { Login } from '@mui/icons-material';
import { NotificationService } from '../../service/notification.service';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';
@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  imports: [CommonModule, ProductDetailComponent, NavBarComponent, FooterComponent, RouterLink, TruncatePipe,CartPopupComponent]
})
export class DetailsComponent implements OnInit {
  product!: Product;
  categoryId !: string;
  otherproducts!: Product[];
  showPopup = false;
  popupMessage = '';


  constructor(private productService: ProductServ,
    private route: ActivatedRoute,
    private productCategories: ProductService,
    private cartService: CartService ,
    private notificationService:NotificationService
    ) { }

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
              this.otherproducts = data.data.products.filter((_, index) => index < 4);
            },
          );
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
      (response) => {
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


