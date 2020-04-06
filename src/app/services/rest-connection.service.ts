import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestConnectionService {
  onInit() {
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'text'
  //   })
  // };

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
    return this.http.post<string>('http://localhost:8080/addToCart', productId);
  }

  deleteFromCart(productId: string) {
    return this.http.post<any>('http://localhost:8080/deleteFromCart', productId);
  }
  

}
