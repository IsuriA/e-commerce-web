import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent implements OnInit {
  cartService = inject(CartService);
  configService = inject(ConfigService);
  paymentService = inject(PaymentService);
  route = inject(ActivatedRoute);
  order$: Observable<any> = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.cartService.GetOrderById(Number(params.get('id')) ?? -1)),
    );
  payments$: Observable<any> = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.paymentService.getPaymentInfo(Number(params.get('id')) ?? -1)),
    );

  ngOnInit(): void {
  }
  
  getTotal(items: Array<any>): number {
    return items.length > 0 && items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}
