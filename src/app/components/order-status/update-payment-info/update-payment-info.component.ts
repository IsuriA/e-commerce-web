import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule,  } from "@angular/material/datepicker";

@Component({
  selector: 'app-update-payment-info',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule, FormsModule, MatInputModule, MatDatepickerModule],
  templateUrl: './update-payment-info.component.html',
  styleUrl: './update-payment-info.component.css'
})
export class UpdatePaymentInfoDialog {
  paymentRefControl = new FormControl('');
  paymentDateControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<UpdatePaymentInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
