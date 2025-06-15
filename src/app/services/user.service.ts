import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);
  
  addUser(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/user/register`, data)
      .pipe();
  }
}
