import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IProduct from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItemList :IProduct[] =[];
  productList$ = new BehaviorSubject<IProduct []>([]);


  constructor() { }

   getProducts () {
   return this.productList$.asObservable()
   }

   addToCart (product :IProduct){
    this.cartItemList.push(product)
    this.productList$.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
   }

  
   
   getTotalPrice ():number{
    let totalPrice =0;
    this.cartItemList.map (product => {
    totalPrice+= product.price*product.quantity
    })
    return totalPrice;
   }

   removeCartItem (product :IProduct) {
    this.cartItemList.map((item,index) => {
     if(product.id === item.id){
      this.cartItemList.splice(index,1)
     }
     this.productList$.next(this.cartItemList)
    })
   }

   removeAllCartItem (){
    this.cartItemList =[]
    this.productList$.next(this.cartItemList)
   }
  
}
