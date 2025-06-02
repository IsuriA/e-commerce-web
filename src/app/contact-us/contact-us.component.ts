import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { InquiryService } from '../services/inquiry.service';

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

  constructor(private fb: FormBuilder) {
    
    this.contactUsForm = this.fb.group({
      userId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    debugger;
    const user: any = this.authService.getUser();
    this.contactUsForm.patchValue({userId: user?.id, name: user?.username, email: user?.email})
  }

  
  onSubmit() {
debugger;
    if (this.contactUsForm.valid) {
      this.inquiryService.send(this.contactUsForm.value)
      .subscribe(result => {
        console.log(result);
      });
    }
  }
}
