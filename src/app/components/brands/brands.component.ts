import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { ProductService } from '../../services/product.service';
import { ConfigService } from '../../services/config/config.service';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-brands',
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  lookupService = inject(LookupService);
  productService = inject(ProductService);
  configService = inject(ConfigService);
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);

  brands$ = this.lookupService.getBrands();

  products: any[] = [];
  selectedBrand: any;

  ngOnInit() {
  }

  onSelect(brand: any) {
    this.selectedBrand = brand;
    this.productService.getProductsByBrand(brand.id)
      .subscribe(result => {
        this.products = result;
      });
  }

  addToCart(product: any) {
    this.cartService.addItemToOrder(product.id)
      .pipe()
      .subscribe(
        data => {
          this.snackBar.open('Item added to the the cart', 'Close', {
            duration: 3000, // Optional duration in milliseconds
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'notification-success',
          });
          this.cartService.updateCartTrigger?.next(true)
        },
        err => {
          this.snackBar.open(err.error.message, 'Close', {
            duration: 3000, // Optional duration in milliseconds
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'notification-error',
          });
        }
      );
  }
}