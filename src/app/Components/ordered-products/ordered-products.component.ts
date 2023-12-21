import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { OrdersComponent } from './orders/orders.component';


@Component({
    selector: 'app-ordered-products',
    standalone: true,
    templateUrl: './ordered-products.component.html',
    imports: [CommonModule, NavBarComponent, FooterComponent,OrdersComponent]
})
export class OrderedProductsComponent {

    currentDate: Date = new Date();

}
