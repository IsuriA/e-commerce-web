import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  user: any;

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
