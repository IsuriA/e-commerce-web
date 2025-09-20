import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  configService = inject(ConfigService);
  order$: Observable<any> = this.cartService.getCurrentOrder();

  ngOnInit(): void {
  }

  increaseQuantity(item: any) {
    this.cartService.updateQuantity(item.product.id, 1).subscribe(res => {
      item.quantity++;
    });

  }

  decreaseQuantity(item: any) {
    this.cartService.updateQuantity(item.product.id, -1).subscribe(res =>{
    item.quantity--;
    if(item.quantity===0){
      item.splice
    }
    });
  }
}

