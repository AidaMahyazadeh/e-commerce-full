import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find, map } from 'rxjs';
import IProduct from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl ='../../assets/data/products.json'
  hatUrl ='../../assets/data/hat-data.json'
  image = '../../assets/images/blog-1.jpg'
  allProducts !:IProduct[];
  constructor(private http :HttpClient) { }
  
  getAllProducts () :Observable <IProduct[]>{
    return this.http.get <IProduct[]>(this.productsUrl)
  }

  getProductsByCategory (category:string):Observable <IProduct[]>{
    return this.http.get <IProduct[]>(`${this.productsUrl}/category`)
  } 


}
