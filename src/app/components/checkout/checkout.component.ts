import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CheckoutComponent implements OnInit {

  cartService = inject(CartService);
  configService = inject(ConfigService);
  order$: Observable<any> = this.cartService.getCurrentOrder().pipe(tap(console.log));

  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      NIC: ['', Validators.required],
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

  getTotal(items: Array<any>): number {
    return items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}
