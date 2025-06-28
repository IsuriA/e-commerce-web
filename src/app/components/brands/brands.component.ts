import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { LookupService } from '../../services/lookup.service';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ConfigService } from '../../services/config/config.service';

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
}




