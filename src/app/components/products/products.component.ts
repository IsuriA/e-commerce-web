import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductManagementComponent } from '../product-management/product-management.component';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config/config.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  authService = inject(AuthService);
  router = inject(Router);
  configService = inject(ConfigService);
  snackBar = inject(MatSnackBar);

  user: any;
  products$ = this.productService.getProducts(null);

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductManagementComponent, {
      role: 'dialog',
      height: '100%',
      width: '800px',
      maxHeight: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result?.message, 'X', {
          duration: 3000, // Optional duration in milliseconds
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'notification-success',
        });

        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    });
  }
}