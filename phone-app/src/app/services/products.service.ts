import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartItemsCount: number = 0;
  products: IProduct[] = [];
  baseURL: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseURL);
  }

  getProductById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  addProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }
  editProduct(id: number, product: any) {
    return this.http.post(`${this.baseURL}/${id} `, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
