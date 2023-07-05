import { Injectable } from '@angular/core';
import IProduct from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cartItem =[];
 productList !:IProduct;
  constructor() { }
}
