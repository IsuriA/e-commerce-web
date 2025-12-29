import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatOptionModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, MatFormFieldModule, MatOptionModule, MatAutocompleteModule, ɵInternalFormsSharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  cartService = inject(CartService);
  userService = inject(UserService);
  router = inject(Router);

  user: any;
  contextUserControl: FormControl = new FormControl('');

  options: any[] | undefined;
  filteredOptions: Observable<any[]> | undefined;
  cartItemCount$ = this.cartService.getItemCountInCart();

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.authUser$.subscribe(() => {
      this.user = this.authService.getUser();
    });
    this.userService.getAllCustomers().subscribe((result) => {
      this.options = result;
    });
    this.filteredOptions = this.contextUserControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    // Set the selected value programmatically
    const selectedCustomer = localStorage.getItem('customerInContext');
    if (selectedCustomer) {
      this.contextUserControl.setValue(JSON.parse(selectedCustomer));
    }
  }

  displayFn = (user: any): string => {
    if (!user) {
      return '';
    }

    return this.getOptionDisplayName(user);
  }

  private _filter(value: any): string[] {
    if (typeof (value) === 'object') {
      console.log(value);
      localStorage.setItem('customerInContext', JSON.stringify(value));
      console.log(localStorage.getItem('customerInContext'));
      return [];
    }

    const filterValue = value.toLowerCase();
    return this.options ? this.options.filter(option => this.getOptionDisplayName(option).toLowerCase().includes(filterValue)) : [];
  }

  canRegisterUser(roleId: number): boolean {
    if (roleId === 10 || roleId === 30 || roleId === 50) {
      return true;
    }

    return false;
  }

  getOptionDisplayName(option: any): string {
    return `${option.firstName?.trim()} ${option.lastName?.trim()} (${option.username?.trim()})`
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.contextUserControl.setValue(null);
    this.router.navigate(['signin']);
  }
}
