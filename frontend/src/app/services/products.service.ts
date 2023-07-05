import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IProduct from '../models/product.model';
import { Observable } from 'rxjs';
import ICategory from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  categoriUrl ='../../assets/data/data.json'
  hatUrl ='../../assets/data/hat-data.json'
  constructor(private http :HttpClient) { }
  
  getCategories () :Observable <ICategory[]>{
    return this.http.get <ICategory[]>(this.categoriUrl)
  }

  getProducts() :Observable <IProduct[]>{
    return this.http.get<IProduct[]>(this.hatUrl);   
  }

}
