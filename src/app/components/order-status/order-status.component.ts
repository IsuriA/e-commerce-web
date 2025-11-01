import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ConfigService } from '../../services/config/config.service';
import { Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  route = inject(ActivatedRoute);
  order$: Observable<any> = this.route.paramMap
    .pipe(
      tap(console.log),
      switchMap((params: ParamMap) => this.cartService.GetOrderById(Number(params.get('id')) ?? -1)),
      tap(console.log),
    );

  ngOnInit(): void {
  }
}
