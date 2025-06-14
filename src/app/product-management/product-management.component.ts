import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { LookupService } from '../services/lookup.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatDialogModule, MatSelectModule],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  productCategories: any[] = [];
  selectedProductCategory: any;

  ngOnInit(): void {
    this.lookupService.getProductCategories()
      .subscribe(result => {
        this.productCategories = result;
      });
  }

  onFileChange(event: Event) {
    const fileUploadelement = event.target as HTMLInputElement;
    if (!fileUploadelement || !fileUploadelement.files) {
      return;
    }
    
    const file = fileUploadelement.files[0]; // Here we use only the first file (single file)
    this.ProductManagementForm.patchValue({ imageFile: file });
  }

  ProductManagementForm: FormGroup;
  ProductService = inject(ProductService);
  lookupService = inject(LookupService);

  constructor(private fb: FormBuilder) {

    this.ProductManagementForm = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: ['']
    });
  }

  addProduct() {
    if (this.ProductManagementForm.valid) {
      console.log('Produts Data:', this.ProductManagementForm.value);
      this.ProductService.addProduct(this.ProductManagementForm.value)
        .subscribe((result: any) => {
          alert(result.message);
        });
    }
  }
}
