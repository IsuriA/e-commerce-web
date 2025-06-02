import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.authService.authUser$.subscribe(() => {
      this.user = this.authService.getUser();
    })
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['signin']);
  }
}
