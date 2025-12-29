import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  getAllCustomers() : Observable<any>{
    let apiUrl = this.configService.getApiUrl();
    if (!apiUrl) {
      return this.configService.loadConfig()
        .pipe(switchMap(() => {
          apiUrl = this.configService.getApiUrl();

          return this.httpClient.get(`${apiUrl}/user/customers`)
        }));
    }

    return this.httpClient.get(`${this.configService.getApiUrl()}/user/customers`);
  }

  addUser(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/user/register`, data);
  }
}
