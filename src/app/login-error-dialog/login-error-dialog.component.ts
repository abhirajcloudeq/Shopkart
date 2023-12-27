// login-error-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-error-dialog',
  template: `
<h1 mat-dialog-title class="text-xl font-bold mb-4 text-white">Error</h1>
<div mat-dialog-content class="text-base mb-4 text-white">
  <p>Incorrect username or password. Please try again.</p>
</div>
<div mat-dialog-actions class="flex justify-end">
  <button mat-button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" (click)="closeDialog()">Close</button>
</div>

  `,
})
export class LoginErrorDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginErrorDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
