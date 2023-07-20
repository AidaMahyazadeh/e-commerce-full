import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IProduct from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  itemList :IProduct[] =[];
  productList$ = new BehaviorSubject<IProduct []>([]);
  productsPrice !:number;
  totalPrice$ = new BehaviorSubject<number>(0);

  constructor() { }

  getProducts () {
    return this.productList$.asObservable()
    }
 
    addItems (product :IProduct){
     this.itemList.push(product)
     this.productList$.next(this.itemList)
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
     this.productList$.next(this.itemList)
    }

}
