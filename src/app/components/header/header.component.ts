import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  cartService = inject(CartService);
  router = inject(Router);

  user: any;
  cartItemCount$ = this.cartService.getItemCountInCart();

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.authUser$.subscribe(() => {
      this.user = this.authService.getUser();
    });
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['signin']);
  }
}
