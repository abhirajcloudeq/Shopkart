import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  standalone:true,
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent {
  @Input() message: string | undefined;
  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit();
  }
}
