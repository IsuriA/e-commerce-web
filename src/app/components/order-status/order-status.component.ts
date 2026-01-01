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
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth/auth.service';

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
  snackBar = inject(MatSnackBar);
  authService = inject(AuthService);

  order$: Observable<any> = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.cartService.GetOrderById(Number(params.get('id')) ?? -1)),
    );
  payments$: Observable<any> = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.paymentService.getPaymentInfo(Number(params.get('id')) ?? -1)),
    );
  authUser: any;

  ngOnInit(): void {
    this.authUser = this.authService.getUser();
  }

  openPaymentDialog(payment: any) {
    const dialogRef = this.dialog.open(UpdatePaymentInfoDialog, {
      width: '400px',
      data: payment
    });

    dialogRef.afterClosed().subscribe(result => {
      this.paymentService.updatePaymentDetails(result).subscribe({
        next: () => {
          result.createdUser = this.authUser.username;
          this.snackBar.open('Update successfull', 'Close', {
            duration: 3000, // Optional duration in milliseconds
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'notification-success',
          });
        },
        error: () => {
          delete result.reference;
          delete result.paymentDate;
          this.snackBar.open('Update failed', 'Close', {
            duration: 3000, // Optional duration in milliseconds
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'notification-error',
          });
        },
      });
    });
  }

  getTotal(items: Array<any>): number {
    return items.length > 0 && items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
}
