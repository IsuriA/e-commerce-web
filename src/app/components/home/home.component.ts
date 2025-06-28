import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { LookupService } from '../../services/lookup.service';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  lookupService = inject(LookupService);
  productService = inject(ProductService);
  configService = inject(ConfigService);

  category$ = this.lookupService.getCategory();

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

}


