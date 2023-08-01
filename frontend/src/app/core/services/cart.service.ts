import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    this.itemList= this.localStorage.getProduct()
    this.productList$.next(this.itemList)
    return this.productList$.asObservable()
    }

   
 
   addItems (product :IProduct){
        if(!this.localStorage.productExisted(product)){
         this.itemList.push(product)
         this.localStorage.productsAddToLocal(product)
         this.productList$.next(this.itemList)
        } else{
          product.quantity ++
        }
       }
    

    removeItem (id :number) {
     this.itemList.map((item,index) => {
      if(id === item.id){
       this.itemList.splice(index,1)
      }
      this.productList$.next(this.itemList)
      this.localStorage.removeProduct(id)
     })
    }
 
    removeAllCartItem (){
     this.itemList =[]
     this.localStorage.removeAllProducts()
     this.productList$.next(this.itemList)
    }

}
