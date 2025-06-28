import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { InquiryService } from '../../services/inquiry.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [InquiryService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  authService = inject(AuthService);
  inquiryService = inject(InquiryService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);

  constructor(private fb: FormBuilder) {

    this.contactUsForm = this.fb.group({
      userId: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    const user: any = this.authService.getUser();
    this.contactUsForm.patchValue({ userId: user?.id, name: user?.username, email: user?.email })
  }


  onSubmit() {
    if (this.contactUsForm.valid) {
      this.inquiryService.send(this.contactUsForm.value)
        .subscribe(result => {
          this.snackBar.open('Inquiry sent successfully', 'X', {
            duration: 2000, // Optional duration in milliseconds
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: 'notification-success',
          });
          this.contactUsForm.patchValue({ message: '' });
        });
    }
  }
}
