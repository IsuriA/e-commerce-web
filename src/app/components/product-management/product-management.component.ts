import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { LookupService } from '../../services/lookup.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatDialogModule, MatSelectModule],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  productForm: FormGroup;
  productService = inject(ProductService);
  lookupService = inject(LookupService);
  dialogRef = inject(MatDialogRef<ProductManagementComponent>)

  productCategories$ = this.lookupService.getProductCategories();
  brands$ = this.lookupService.getBrands();

  ngOnInit(): void {
  }

  onFileChange(event: Event) {
    const fileUploadelement = event.target as HTMLInputElement;
    if (!fileUploadelement || !fileUploadelement.files) {
      return;
    }

    const files = fileUploadelement.files; // Here we use only the first file (single file)
    this.productForm.patchValue({ imageFiles: files });
  }

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFiles: ['', [Validators.required]],
      imageUrl: ['']
    });
  }

  addProduct(event: Event) {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      this.productForm.markAsDirty();

      return;
    }

    this.productService.addProduct(this.productForm.value)
      .subscribe({
        next: value => this.dialogRef.close(value),
        error: () => this.dialogRef.close(),
      });
  }
}