import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports:[CommonModule,FormsModule,ReactiveFormsModule]
})
export class CheckoutComponent implements OnInit {
  cartItems = [
    { name: 'Switch', quantity: 2, price: 1200 },
    { name: 'Bulb', quantity: 5, price: 200 }
  ];

  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      NIC:['',Validators.required],
      address: ['', Validators.required],
      instructions: [''],
      paymentMethod: ['storePickup', Validators.required]
    });
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      console.log('Order Submitted:', this.checkoutForm.value);
      alert('Order placed successfully!');
    }
  }
}
