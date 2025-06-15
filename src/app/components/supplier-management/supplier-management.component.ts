import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css'],
})
export class SupplierManagementComponent {
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}

  supplierManagementForm: FormGroup;
  userService = inject(UserService);

  constructor(private fb: FormBuilder) {
    
    this.supplierManagementForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price_per_unit: ['', [Validators.required]],
      total_price:['',[Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {

    if (this.supplierManagementForm?.valid) {
      console.log('Produts Data:', this.supplierManagementForm.value);
      this.userService.addUser(this.supplierManagementForm.value).subscribe((result: any) => {
        alert(result.message);
     });
    }
  }
}
