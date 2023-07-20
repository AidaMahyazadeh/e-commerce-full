import { Injectable } from '@angular/core';
import IProduct from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  token !:string;
  products :IProduct[] =[];
  constructor() { }

  isLoggedin ()  {
    return (!!localStorage.getItem ('token'))
 }
  logout () {
   return localStorage.clear ()
  }

  storeToken (tokenValue : string){
    localStorage.setItem ('token',tokenValue)
  }

  getToken (){
    return this.token  =localStorage.getItem ('token')!
  }

  storeRole (role :string) {
    localStorage.setItem ('role' ,role)
  }

  getRole () {
    return  localStorage.getItem('role')
  }

  storeProduct(prduct :IProduct){
    localStorage.setItem('cartItems',JSON.stringify([prduct]))
  }


  productsAddToLocal(product :IProduct){
    let cartData :IProduct[] =[];
    let cartItems = localStorage.getItem('cartItems');
    if(!cartItems){
      localStorage.setItem('cartItems',JSON.stringify([product]))
    }else{
      cartData = JSON.parse(cartItems)
      cartData.push(product)
      localStorage.setItem('cartItems',JSON.stringify(cartData))
    }
  }

  removeAllProducts (){
    localStorage.clear()
  }

  removeProduct (productId:number){
    let cartDate = localStorage.getItem('cartItems');
    if(cartDate){
      this.products = JSON.parse(cartDate);
      this.products =this. products.filter(prduct =>prduct.id != productId)
      localStorage.setItem('cartItems',JSON.stringify(this.products))
    }
  }
  
  cartNumber(){
    let cartDate = localStorage.getItem('cartItems')
    let cartNumber = cartDate?.length
    return cartNumber
  }

}