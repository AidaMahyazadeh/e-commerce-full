import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import IProduct from 'src/app/shared/models/product.model';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
favoraiteProducts :IProduct [] =[];  
wishListSubject$ = new BehaviorSubject<IProduct[]>([]) ;
products :IProduct[]=[];

  constructor(
    private authStorage : AuthStorageService
    ) { }

getProducts (){
  return this.wishListSubject$.asObservable()
}

  addToWishList (product :IProduct){
  this.favoraiteProducts.push(product)
  this.wishListSubject$.next(this.favoraiteProducts)
  }

  // addToWishListById(productId:number){
  // return this.cartService.productList$.pipe(
  //   map (items =>items.filter(item =>{
  //     item.id == productId
  //     this.favoraiteProducts.push(item)
  //    this.wishListSubject$.next(this.favoraiteProducts)
  //    this.authStorage.storeFavoraiteProduct(item)
  //    item.favoraite =true
  //   }
  //     ))
  // )
  // }

 removeFromWishList(productId:number){
  this.favoraiteProducts.map((item,index) => {
    if(productId === item.id){
     this.favoraiteProducts.splice(index,1)
    }
    this.wishListSubject$.next(this.favoraiteProducts)
    this.authStorage.clearFavoraiteItem(productId)
   })
 }

 clearWishList(){
  this.authStorage.clearAllFavoraiteItems()
 }

}

