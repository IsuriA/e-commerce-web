import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductManagementComponent } from '../product-management/product-management.component';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

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
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        location.reload();
        // let currentUrl = this.router.url;
        // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        //   this.router.navigate([currentUrl]);
        // });
        //alert('test dialog');
      }
    });

    
  }
}