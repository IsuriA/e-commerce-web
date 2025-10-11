import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  httpClient = inject(HttpClient);
  configService = inject(ConfigService);
  updateCartTrigger = new BehaviorSubject<boolean>(true);

  getItemCountInCart(): Observable<number> {
    return this.updateCartTrigger
      .pipe(switchMap(
        (update) => {
          if (!update) {
            return of(0);
          }

          let apiUrl = this.configService.getApiUrl();
          if (!apiUrl) {
            return this.configService.loadConfig()
              .pipe(switchMap(() => {
                apiUrl = this.configService.getApiUrl();

                return this.httpClient
                  .get<number>(`${apiUrl}/order/itemCount`);
              }));
          }

          return this.httpClient
            .get<number>(`${apiUrl}/order/itemCount`);
        }))
  }

  addItemToOrder(productId: Number): Observable<any> {
    return this.httpClient
      .post(`${this.configService.getApiUrl()}/order/addToOrder/${productId}`, {});
  }

  getCurrentOrder(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.configService.getApiUrl()}/order/current`);
  }

  updateQuantity(productId:number, quantity:number):Observable<any> {
    return this.httpClient
    .post(`${this.configService.getApiUrl()}/order/updateQuantity/${productId}/${quantity}`,{});
  }
}
