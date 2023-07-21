import { Injectable } from '@angular/core';
import IProduct from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  token !:string;
  product :IProduct []=[]
  products :IProduct[] =[];
  cartData :IProduct[] =[];
  constructor() { }

  isLoggedin ()  {
    return (!!localStorage.getItem ('token'))
 }
  logout () {
   return localStorage.clear()
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

  storeProduct(product :IProduct){
    this.product.push(product)
    localStorage.setItem('cartItems',JSON.stringify(this.product))
  }
  
  getProduct(){
    return localStorage.getItem ('cartItems')
  }

  productsAddToLocal(product :IProduct){
    //let cartData :IProduct[] =[];
    this.product.push(product)
    let cartItems = localStorage.getItem('cartItems');
    if(!cartItems){
      localStorage.setItem('cartItems',JSON.stringify(this.product))
    }else{
     this.cartData = JSON.parse(cartItems)
      this.cartData.push(product)
      localStorage.setItem('cartItems',JSON.stringify(this.cartData))
    } 
  }

  getAllProducts ():IProduct[]{
    return this.cartData
  }

  removeAllProducts (){
    localStorage.removeItem('cartItems')
  }

  removeProduct (productId:number){
    let cartDate = localStorage.getItem('cartItems');
    if(cartDate){
      this.products = JSON.parse(cartDate);
      this.products =this. products.filter(prduct =>prduct.id != productId)
      localStorage.setItem('cartItems',JSON.stringify(this.products))
    }
  }

  // cartNumber(): number{
  // //console.log(this.cartData.length)
  // return this.cartData.length
  // }

  storeFavoraiteProduct(product :IProduct){
    localStorage.setItem('favoraiteItems',JSON.stringify([product]))
  }



  clearFavoraiteItem(productId :number){
    let favoraiteItems = localStorage.getItem('favoraiteItems');
    let favoraiteProduct :IProduct[];
    if(favoraiteItems){
      favoraiteProduct = JSON.parse(favoraiteItems);
      favoraiteProduct=favoraiteProduct.filter(product =>product.id != productId)
      localStorage.setItem('favoraiteItems',JSON.stringify(favoraiteProduct))
    }
  }

  clearAllFavoraiteItems(){
    localStorage.removeItem('favoraiteItems')
  }

}