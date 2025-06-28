import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  getCategory() {
    throw new Error('Method not implemented.');
  }

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  getProductCategories(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/productCategories`)
      .pipe();
  }

  getRoles(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/roles`)
      .pipe();
  }

  getBrands(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/brands`)
      .pipe();
  }
}
