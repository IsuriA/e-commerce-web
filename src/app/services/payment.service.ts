import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  httpClient = inject(HttpClient);
  configService = inject(ConfigService);
  
  checkoutOrder(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/order/checkout`, data);
  }
}
