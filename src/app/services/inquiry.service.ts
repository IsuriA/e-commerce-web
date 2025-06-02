import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7256/api/inquiry';
  
  constructor() { }

  send(data: any) {
    return this.httpClient.post(`${this.baseUrl}`, data)
      .pipe();
  }
}
