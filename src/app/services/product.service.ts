import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  addProduct(data: any): Observable<any> {
    const formData = new FormData();
    if (data.imageFiles.length) {
      const filesArray = [...data.imageFiles];
      filesArray.forEach((file: File) => {
        formData.append('imageFiles', file);
      });
    }

    formData.append('name', data.name);
    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('category.Code', data.category?.code);
    formData.append('category.Id', data.category?.id);
    formData.append('category.Name', data.category?.name);
    formData.append('brand.Name', data.brand?.name);
    formData.append('brand.Id', data.brand?.id);
    formData.append('description', data.description);
    formData.append('imageUrl', 'test');

    const url = `${this.configService.getApiUrl()}/product`;
    console.log(url);

    return this.httpClient.post(url, formData)
      .pipe(tap(console.log));
  }

  getProducts(data: any): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/product`)
      .pipe();
  }

  getProductsByBrand(brandId: number): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/product/brand/${brandId}`)
      .pipe();
  }

  getProductsByCategory(categoryId: number): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.configService.getApiUrl()}/product/category/${categoryId}`)
      .pipe();
  }
}
