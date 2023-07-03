import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hats from '../../assets/data/hat-data.json';
import IProduct from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http :HttpClient) { }
  
  getHats() :Observable <IProduct[]>{
    return this.http.get<IProduct[]>(hats);
    
  }
}
