import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../../service/create-order.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../service/get-cart.service';
@Component({
  selector: 'app-form',
  standalone:true,
  templateUrl: './form.component.html',
  imports:[ReactiveFormsModule,CommonModule,]

})
export class FormComponent {
  showForm: boolean = false;
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService,private cartservice:CartService) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  proceedtocheckout() {
    this.showForm = !this.showForm;
  }

  toggleModal() {
    this.showForm = !this.showForm;
  }

  removeitem() {
    alert('Are you sure you want to remove the item?');
  }

  onSubmit(): any {
    if (this.orderForm.valid) {
      const userId = localStorage.getItem("userId");
  
      this.cartservice.getCartProductsByUserId(userId as string).subscribe(
        (products: any[]) => { 
          console.log("produivys",products);
          
          const payload = {
            userId: userId,
            address: this.orderForm.value.address,
            contactNo: this.orderForm.value.phone,
            products:
              products[0].products.map((product:any) => ({

                productId: product.productId,      
                quantity: product.quantity  
              }))
            
          };
  
          console.log(payload);
  
          this.orderService.placeOrder(payload).subscribe(
            (response: any) => {
              console.log('Order placed successfully!', response);
            },
           
          );
        },
       
      );
    }
  }
  
}
