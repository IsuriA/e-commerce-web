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

          return this.httpClient
            .get<number>(`${this.configService.getApiUrl()}/order/itemCount`);
        }))
  }

  addItemToOrder(productId: Number): Observable<any> {
    return this.httpClient
      .post(`${this.configService.getApiUrl()}/order/addToOrder/${productId}`, {});
  }
}
