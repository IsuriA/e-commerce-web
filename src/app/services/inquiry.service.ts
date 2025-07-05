import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  send(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/inquiry`, data)
      .pipe();
  }
}
