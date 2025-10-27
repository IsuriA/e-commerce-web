import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  getProductCategories(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/productCategories`);
  }

  getRoles(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/roles`);
  }

  getBrands(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/brands`);
  }

  getCategories(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/productCategories`);
  }

  getPaymentMethods(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/lookup/paymentMethods`);
  }
}
