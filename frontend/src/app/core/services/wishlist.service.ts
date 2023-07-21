import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import IProduct from 'src/app/shared/models/product.model';
import { AuthStorageService } from './auth-storage.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
favoraiteProducts :IProduct [] =[];  
wishListSubject$ = new BehaviorSubject<IProduct[]>([]) ;
products :IProduct[]=[];

  constructor(
    private authStorage : AuthStorageService,
    private cartService :CartService
    ) { }

getProducts (){
  return this.wishListSubject$.asObservable()
}

  addToWishList (product :IProduct){
  product.favoraite=true 
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
 this.cartService.removeItem(productId)
 this.authStorage.clearFavoraiteItem(productId )
 }

 clearWishList(){
  this.cartService.removeAllCartItem()
  this.authStorage.clearAllFavoraiteItems()
 }

}

