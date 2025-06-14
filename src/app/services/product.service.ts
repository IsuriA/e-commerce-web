import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7256/api/product';

  constructor() { }

  addProduct(data: any) {
    // const formData = new FormData();
    // formData.append('imageFile', data.imageFile, data.imageFile?.name); 
    // formData.append('name', data.name); 
    // formData.append('quantity', data.quantity); 
    // formData.append('price', data.price);
    // formData.append('category', JSON.stringify(data.category));
    // formData.append('description', data.description);
    // formData.append('imageUrl', 'test');
    
    return this.httpClient.post(`${this.baseUrl}`, data)
      .pipe();
  }

  getProducts(data: any): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.baseUrl}`)
      .pipe();
  }
}
