import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { LookupService } from '../../services/lookup.service';
import { ConfigService } from '../../services/config/config.service';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  lookupService = inject(LookupService);
  productService = inject(ProductService);
  configService = inject(ConfigService);
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);

  categories$ = this.lookupService.getCategories();

  products: any[] = [];
  user: any;
  selectedCategory: any;

  ngOnInit() {
    //this.getAllProducts();
  }

  onSelect(category: any) {
    this.selectedCategory = category;
    this.productService.getProductsByCategory(category.id)
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