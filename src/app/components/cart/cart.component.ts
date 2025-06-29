import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
removeItem(arg0: any) {
throw new Error('Method not implemented.');
}
decreaseQty(_t6: any) {
throw new Error('Method not implemented.');
}
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
