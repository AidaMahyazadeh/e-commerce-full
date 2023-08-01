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
lengthOfFavoraiteItems :number =0

  constructor(
    private authStorage : AuthStorageService
    ) { }

getProducts (){
  this.favoraiteProducts =this.authStorage.getFavoraiteProducts()
  this.wishListSubject$.next(this.favoraiteProducts)
  return this.wishListSubject$.asObservable()
}

  addToWishList (product :IProduct){
    if (!this.authStorage.favoariteProductExisted(product)){
      this.authStorage.storeFavoraiteProduct(product)
       this.wishListSubject$.next(this.favoraiteProducts)
    }
 
  }

 removeFromWishList(productId:number){
  this.favoraiteProducts.map((item,index) => {
    if(productId === item.id){
     this.favoraiteProducts.splice(index,1)
     item.favoraite =false
     this.authStorage.clearFavoraiteItem(productId)
    this.wishListSubject$.next(this.favoraiteProducts)
    }
   })
 }
 
 clearWishList(){
  this.authStorage.clearAllFavoraiteItems()
 }

}

