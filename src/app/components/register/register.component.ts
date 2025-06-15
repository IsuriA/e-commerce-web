import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LookupService } from '../../services/lookup.service';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatSelectModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userService = inject(UserService);
  router = inject(Router);
  lookupService = inject(LookupService);
  authService = inject(AuthService);
  roles: any[] = [];
  roleControlEnabled: boolean = true;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.lookupService.getRoles()
      .subscribe(result => {
        const user = this.authService.getUser();
        if (user?.role?.accessLevel === 10) {
          this.roles = result.filter(r => r.accessLevel === 30 || r.accessLevel === 50);
          this.registerForm.patchValue({ role: this.roles[0] });
          return;
        }

        this.roles = result.filter(r => r.accessLevel === 100);
        this.registerForm.patchValue({ role: this.roles[0] });
        this.roleControlEnabled = false;
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration Data:', this.registerForm.value);
      this.userService.addUser(this.registerForm.value).subscribe((result: any) => {
        alert(result.message);
            this.router.navigate(['signin']);
      });
    }
  }
}
