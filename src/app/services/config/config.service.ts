import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: any;
  httpClient = inject(HttpClient);

  loadConfig() {
    return this.httpClient.get('/config.json')
      .pipe(tap(result => this.config = result));
  }

  getApiUrl() {
    return this.config.API_URL;
  }
}