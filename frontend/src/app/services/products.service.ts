import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import IProduct from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  categoriUrl ='../../assets/data/data.json'
  hatUrl ='../../assets/data/hat-data.json'
  constructor(private http :HttpClient) { }
  
  
  getProducts() :Observable <IProduct[]>{
    return this.http.get<IProduct[]>(this.hatUrl);   
  }

}
