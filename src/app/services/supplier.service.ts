import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  addSupplier(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/product`, data)
      .pipe();
  }
}

