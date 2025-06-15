import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'e-commerce-web';
  configService = inject(ConfigService);

  ngOnInit(): void {
    this.configService.loadConfig()
      .subscribe(console.log);
  }
}