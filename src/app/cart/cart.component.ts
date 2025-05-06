import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      name: 'LED Bulb',
      price: 600,
      quantity: 2,
      image: 'assets/images/led-bulb.jpg'
    },
    {
      id: 2,
      name: 'Electric Kettle',
      price: 4500,
      quantity: 1,
      image: 'assets/images/kettle.jpg'
    },
    {
      id: 3,
      name: 'Mobile Charger',
      price: 1200,
      quantity: 3,
      image: 'assets/images/charger.jpg'
    }
  ];

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increaseQty(item: any): void {
    item.quantity++;
  }

  decreaseQty(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
