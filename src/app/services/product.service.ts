import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  products: Product[];
  urlApi: string = 'http://localhost:5000/api/product'; 

  getProducts() {
    return this.http.get(this.urlApi);
  }

  addProduct(product: Product) {
    return this.http.post(this.urlApi, product);
  }
}
