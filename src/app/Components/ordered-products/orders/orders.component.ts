import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOrdersService } from '../../../service/get-orders.service';
import { TruncatePipe } from '../../../truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,TruncatePipe,RouterLink],
  templateUrl: './orders.component.html',
})

export class OrdersComponent implements OnInit {
  userId: string | null = null;
  orders: any[] = [];
  selectedOrder: any = null; 

  constructor(private getOrdersService: GetOrdersService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    if (this.userId) {
      this.fetchOrders(this.userId);
      
    }
  }
  showOrderDetails(order: any): void {
    console.log(order)
    this.selectedOrder = order;
  }


  fetchOrders(userId: string): void {
    this.getOrdersService.getOrders(userId).subscribe(
      data => {
        this.orders = data;
        this.orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        if (this.orders.length > 0) {
          this.selectedOrder = this.orders[0];
        }

      },
     
    );
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  getSelectedOrderTotal(): number {
    if (!this.selectedOrder || !this.selectedOrder.products) return 0;

    return this.selectedOrder.products.reduce((total: number, product: { price: number}) => {
      return total + (product.price );
    }, 0);
  }
  getTotalPrice(orderId: number): number {
    const order = this.orders.find(o => o.orderId === orderId);
    if (!order) return 0;
  
    return order.products.reduce((acc: any, product: { price: any; }) => acc + product.price, 0);
  }
  
}


