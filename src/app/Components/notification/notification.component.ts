import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone:true,
  templateUrl: './notification.component.html',
  imports:[CommonModule]
})
export class NotificationComponent implements OnInit {
  notificationMessage: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotificationSubject().subscribe((message: string | null) => {
      this.notificationMessage = message;

      setTimeout(() => {
        this.notificationMessage = null;
      }, 1500);
    });
  }
}
