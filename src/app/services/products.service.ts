import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.module';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }


  getByCategory(categoryId: string, limit:number, offset:number){
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`,{
      params:{limit, offset}
    });
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  create(dto:CreateProductDTO){
    return this.http.post<Product>(`${this.apiUrl}/products`,dto);
  }

  //*put i need to send all data, patch update just one data
  update(id:string, dto:UpdateProductDTO){
    return this.http.patch<Product>(`${this.apiUrl}/products/${id}`,dto);
  }

  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`);
  }


  //*Query parameters
  getProductByPage(limit:number, offset:number){
    /* return this.http.get<Product[]>(this.apiUrl); */
    return this.http.get<Product[]>(`${this.apiUrl}/products`,{
      params:{limit, offset}
    });
  }
}
