import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import IProduct from 'src/app/shared/models/product.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  itemList :IProduct[] =[];
  productList$ = new BehaviorSubject<IProduct []>([]);
  productsPrice !:number;
  allProducts :IProduct[]=[];
  
 

  constructor(private localStorage :AuthStorageService) { }

  getProducts () {
    return this.productList$.asObservable()
    }
 
    addItems (product :IProduct){
     this.itemList.push(product)
     this.productList$.next(this.itemList)
    }


    addProductsById(productId :number){
      return this.getProducts().pipe(
        map(products=>products.filter(product =>{
          product.id ==productId
          this.itemList.push(product)
          this.localStorage.productsAddToLocal(product)
          this.productList$.next(this.itemList)
        }
          ))
      )
    }
   
    
    removeItem (id :number) {
     this.itemList.map((item,index) => {
      if(id === item.id){
       this.itemList.splice(index,1)
      }
      this.productList$.next(this.itemList)
     })
    }
 
    removeAllCartItem (){
     this.itemList =[]
     this.localStorage.removeAllProducts()
     this.productList$.next(this.itemList)
    }

}
