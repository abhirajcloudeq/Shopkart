import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../../service/create-order.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../service/get-cart.service';
import { AuthService } from '../../../service/authentication.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone:true,
  templateUrl: './form.component.html',
  imports:[ReactiveFormsModule,CommonModule,],
  

})
export class FormComponent {
  showForm: boolean = false;
  orderForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private orderService: OrderService,private cartservice:CartService, private router: Router) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    
    this.orderForm.patchValue({
      firstName: firstName,
      lastName: lastName,
      email: email
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
    if (this.orderForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const userId = localStorage.getItem("userId");
  
      this.cartservice.getCartProductsByUserId(userId as string).subscribe(
        (products: any[]) => { 
          console.log("produivys",products);
          
          const payload = {
            userId: userId,
            address: this.orderForm.value.address,
            contactNo: this.orderForm.value.phone,
            products:
              products
          
          };
  
          console.log(payload);
  
          this.orderService.placeOrder(payload).subscribe(
            (response: any) => {
              console.log('Order placed successfully!', response);
              this.router.navigate(['/order']);
            },
           
          );
        },
       
      );
    }
  }
  
}
