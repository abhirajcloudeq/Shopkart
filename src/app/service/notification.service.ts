// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor() {}

  success(message: string, title: string = 'Success'): void {
    // Implement your success notification logic here
    console.log(`[SUCCESS] ${title}: ${message}`);
  }

  error(message: string, title: string = 'Error'): void {
    // Implement your error notification logic here
    console.log(`[ERROR] ${title}: ${message}`);
  }

}
