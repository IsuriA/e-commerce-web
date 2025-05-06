import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class SellerAuthComponent {
  products = [
    // Lighting
    { name: 'LED Bulb 9W', price: 250, image: 'assets/products/led-bulb.jpg', category: 'Lighting' },
    { name: 'Tube Light', price: 750, image: 'assets/products/tube-light.jpg', category: 'Lighting' },
    { name: 'Chandelier Light', price: 5200, image: 'assets/products/chandelier.jpg', category: 'Lighting' },

    // Home Appliances
    { name: 'Ceiling Fan', price: 4950, image: 'assets/products/fan.jpg', category: 'Home Appliances' },
    { name: 'Electric Iron', price: 2200, image: 'assets/products/iron.jpg', category: 'Home Appliances' },
    { name: 'Washing Machine', price: 65500, image: 'assets/products/washing-machine.jpg', category: 'Home Appliances' },

    // Kitchen Appliances
    { name: 'Microwave Oven', price: 24000, image: 'assets/products/microwave.jpg', category: 'Kitchen Appliances' },
    { name: 'Mixer Grinder', price: 7800, image: 'assets/products/mixer.jpg', category: 'Kitchen Appliances' },
    { name: 'Electric Kettle', price: 3100, image: 'assets/products/kettle.jpg', category: 'Kitchen Appliances' },

    // Mobile Accessories
    { name: 'Power Bank 10000mAh', price: 3500, image: 'assets/products/powerbank.jpg', category: 'Mobile Accessories' },
    { name: 'USB Type-C Cable', price: 800, image: 'assets/products/usb-cable.jpg', category: 'Mobile Accessories' },
    { name: 'Bluetooth Headset', price: 4300, image: 'assets/products/headset.jpg', category: 'Mobile Accessories' }
  ];
}



