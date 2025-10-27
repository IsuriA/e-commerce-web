import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { render } from 'creditcardpayments/creditcardpayments';
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
  renderer = inject(Renderer2);
  checkoutForm!: FormGroup;
  order: any;
  orderTotal: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      NIC: ['', Validators.required],
      address: ['', Validators.required],
      instructions: [''],
      paymentMethod: ['storePickup', Validators.required],
    });

    this.cartService.getCurrentOrder().pipe(tap(order => {
      this.order = order;
      this.orderTotal = this.getTotal(order?.items || []);

      render({
        id: '#payPalButtons',
        currency: 'USD',
        value: (this.orderTotal/300).toFixed(2),
        onApprove: (details) => {
          console.log(`details`, details);
        },
      });
    })).subscribe();
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      console.log('Order Submitted:', this.checkoutForm.value);
      alert('Order placed successfully!');
    }
  }

  getTotal(items: Array<any>): number {
    return items.length > 0 && items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}
