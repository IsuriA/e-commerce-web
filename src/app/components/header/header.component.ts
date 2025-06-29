import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  user: any;

  cartCount: number = 0;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.authUser$.subscribe(() => {
      this.user = this.authService.getUser();
    })
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['signin']);
  }
}
