import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { render } from 'creditcardpayments/creditCardPayments';
import { Observable, tap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';
import { LookupService } from '../../services/lookup.service';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CheckoutComponent implements OnInit {
  lookupService = inject(LookupService);
  cartService = inject(CartService);
  paymentService = inject(PaymentService);
  configService = inject(ConfigService);
  router = inject(Router);
  checkoutForm!: FormGroup;
  order: any;
  orderTotal: number = 0;
  paymentMethods$: Observable<Array<any>> = this.lookupService.getPaymentMethods();
  snackBar = inject(MatSnackBar)

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      installments: [1, Validators.required],
      instructions: [''],
      name: ['', Validators.required],
      NIC: [''],
      orderId: ['', Validators.required],
      reference: [''],
      paymentMethod: ['PAY_NOW', Validators.required],
      phone: [''],
      total: [0],
      customerId: [null],
    });

    this.cartService.getCurrentOrder().pipe(tap(order => {
      this.order = order;
      this.orderTotal = this.getTotal(order?.items || []);
      this.checkoutForm.patchValue({ orderId: this.order.id });

      if ((order?.items || []).length === 0) {
        this.router.navigate(['/cart'])
      }

      render({
        id: '#payPalButtons',
        currency: 'USD',
        value: (this.orderTotal / 300).toFixed(2),
        onApprove: (details) => {
          console.log(`details`, details);
          this.checkoutForm.patchValue({
            reference: details.id,
            name: details.purchase_units[0].shipping.name.full_name,
            email: details.payer.email_address,
            address: this.getFullAddress(details.purchase_units[0].shipping.address),
            total: this.orderTotal,
          });
          this.submitOrder();
        },
      });
    })).subscribe();
  }

  getFullAddress(address: any) {
    let shippingAddress: string = '';
    const separator = ', ';
    shippingAddress += address.address_line_1;
    shippingAddress += separator;
    if (address.address_line_2) {
      shippingAddress += address.address_line_2;
      shippingAddress += separator;
    }

    shippingAddress += address.admin_area_2;
    shippingAddress += separator;
    shippingAddress += address.postal_code;

    return shippingAddress;
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      const selectedCustomer: string | null = localStorage.getItem('customerInContext');
      this.checkoutForm.patchValue({
        customerId: selectedCustomer ? JSON.parse(selectedCustomer)?.id : null,
        total: this.orderTotal
      });
      this.paymentService.checkoutOrder(this.checkoutForm.value).subscribe((result: any) => {
        this.snackBar.open(result.message, 'Close', {
          duration: 3000, // Optional duration in milliseconds
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'notification-success',
        });
        setTimeout(() => {
          this.router.navigate([`order-status/${this.checkoutForm.value.orderId}`]);
          this.cartService.updateCartTrigger.next(true);
        }, 3000);
      });
    }
  }

  getTotal(items: Array<any>): number {
    return items.length > 0 && items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}