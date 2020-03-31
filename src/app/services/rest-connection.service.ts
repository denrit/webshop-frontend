import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestConnectionService {
  onInit() {
  }

  constructor(private http: HttpClient) {
    this.onInit();
  }

  getProducts() {
    let products =  this.http.get<Product[]>('http://localhost:8080/products');
    return products;
  }

  getCartItems() {
    let products =  this.http.get<string[]>('http://localhost:8080/cart');
    return products;
  }

  moveToCart(productId: string) {
    let returnValue = this.http.post<any>('http://localhost:8080/addToCart', productId);
    console.log(returnValue);
  }

  deleteFromCart(productId: string) {
    this.http.post<any>('http://localhost:8080/deleteFromCart', productId);
  }
  

}
