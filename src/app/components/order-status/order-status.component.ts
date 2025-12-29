import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { MatIconModule } from '@angular/material/icon';
import { UpdatePaymentInfoDialog } from './update-payment-info/update-payment-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent implements OnInit {
  cartService = inject(CartService);
  configService = inject(ConfigService);
  paymentService = inject(PaymentService);
  route = inject(ActivatedRoute);
  dialog = inject(MatDialog);
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

  openPaymentDialog(payment: any) {
    console.log(payment);
    const dialogRef = this.dialog.open(UpdatePaymentInfoDialog, {
      width: '250px',
      data: payment
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getTotal(items: Array<any>): number {
    return items.length > 0 && items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}
