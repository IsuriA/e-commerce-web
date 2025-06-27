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
  
  // [
  //   { name: '', logo: 'images/sony.png' },
  //   { name: '', logo: 'images/samsung.png' },
  //   { name: '', logo: 'images/panasonic.jpg' },
  //   { name: '', logo: 'images/lg.png' },
  //   { name: '', logo: 'images/smeg.png' },
  //   { name: '', logo: 'images/dell.png' },
  //   { name: '', logo: 'images/lenovo.png' },
  //   { name: '', logo: 'images/huawei.png' },
  //   { name: '', logo: 'images/hitachi.png' },
  //   { name: '', logo: 'images/philips.png' },
  //   { name: '', logo: 'images/ghd.png' },
  //   { name: '', logo: 'images/lange.png' },
  //   { name: '', logo: 'images/tcl.png' },
  //   { name: '', logo: 'images/jbl.png' }
  // ];

  products: any[] = [];
  selectedBrand: any;

  ngOnInit() {
    //this.getAllProducts();
  }

  onSelect(brand: any){
    this.selectedBrand = brand;
    this.productService.getProductsByBrand(brand.id)
    .subscribe(result => {
      this.products = result;
    });
  }

  // getAllProducts() {
  //   this.http.get<any[]>('https://yourapi.com/api/product')  // replace with your real endpoint
  //     .subscribe((data: any[]) => {
  //       this.products = data;
  //       this.brands = [...new Set(this.products.map(p => p.brand))]; // unique brand list
  //     });
  // }

  // filterByBrand(brand: string) {
  //   this.selectedBrand = brand;
  //   this.filteredProducts = this.products.filter(p => p.brand === brand);
  // }

}




