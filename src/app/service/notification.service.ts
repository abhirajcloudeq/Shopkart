// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new Subject<string>();

  public getNotificationSubject() {
    return this.notificationSubject.asObservable();
  }

  public showNotification(message: string) {
    this.notificationSubject.next(message);
  }
}
