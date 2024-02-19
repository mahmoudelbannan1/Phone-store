import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { productData } from './productData';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  cartItemsCount: any;
  products: IProduct[] = [];
  constructor() {
    this.products = productData;
  }
  //get all products
  getAllProduct(): IProduct[] {
    return this.products;
  }
  //get product by id
  getProductId(id: number) {
    return this.products.find((product) => product.id == id);
  }
  //delete product
  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id != id);
    return this.products;
  }
  //add product
  addProduct(product: any) {
    this.products.push(product);
    console.log(this.products);
    return this.products;
  }
  //update product
  updateProduct(index: number, product: any) {
    this.products.splice(index, 1, product);
    return this.products;
  }
}
