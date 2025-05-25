import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Registration Data:', form.value);
      // You can integrate this with your backend API here
    }
  }
}
