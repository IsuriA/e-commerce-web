import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7256/api/lookup';
  
  constructor() { }

  getProductCategories() : Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/productCategories`)
      .pipe();
  }

  getRoles() : Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}/roles`)
      .pipe();
  }
}
