import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOrdersService } from '../../../service/get-orders.service';
import { TruncatePipe } from '../../../truncate.pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,TruncatePipe],
  templateUrl: './orders.component.html',
})

export class OrdersComponent implements OnInit {
  userId: string | null = null;
  orders: any[] = [];

  constructor(private getOrdersService: GetOrdersService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    if (this.userId) {
      this.fetchOrders(this.userId);
    }
  }

  fetchOrders(userId: string): void {
    this.getOrdersService.getOrders(userId).subscribe(
      data => {
        this.orders = data;
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  
}


