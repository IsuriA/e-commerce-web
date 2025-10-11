import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtorFollowupService {
  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

   getPaymentDueOrders(): Observable<Array<any>> {
      return this.httpClient
        .get<Array<any>>(`${this.configService.getApiUrl()}/order/paymentDueOrders`);
    }
}
