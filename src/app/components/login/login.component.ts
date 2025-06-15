import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  authService = inject(AuthService)
  router = inject(Router);
  snackBar = inject(MatSnackBar);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(
          data => {
            this.snackBar.open('Login successfull', 'Close', {
              duration: 3000, // Optional duration in milliseconds
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notification-success',
            });

            if (this.authService.isLoggedIn()) {
              this.router.navigate(['home']);
            }
          },
          err => {
            this.snackBar.open(err.error.message, 'Close', {
              duration: 3000, // Optional duration in milliseconds
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notification-error',
            });
          }
        );
    }
  }
}