import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTimepickerModule } from "@angular/material/timepicker";
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-update-payment-info',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule,
    FormsModule, MatInputModule, MatDatepickerModule, MatTimepickerModule, MatButtonModule],
  templateUrl: './update-payment-info.component.html',
  styleUrl: './update-payment-info.component.css'
})
export class UpdatePaymentInfoDialog {

  constructor(
    public dialogRef: MatDialogRef<UpdatePaymentInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancelClick(): void {
    this.data.reference = undefined;
    this.data.paymentDate = undefined;
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.data.reference && this.data.paymentDate) {
      this.dialogRef.close(this.data);
    }
  }
}
