import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7256/api/product';
  
  constructor() { }

  addSupplier(data: any) {
    return this.httpClient.post(`${this.baseUrl}`, data)
      .pipe();
  }
}

