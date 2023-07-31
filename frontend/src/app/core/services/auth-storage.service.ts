import { Injectable } from '@angular/core';
import IProduct from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  token !:string;
  products :IProduct[] =[];
  cartData :IProduct[] =[];
  favoraiteItems :IProduct[]=[];

  constructor() { }

  isLoggedin ()  {
    return (!!localStorage.getItem ('token'))
 }
  logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
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

  storeCartItems (){
    localStorage.setItem('cartItems',JSON.stringify(this.products))
  }

  storeProduct(product :IProduct){
    this.products.push(product)
    this.storeCartItems()
  }
  
  getProduct(){
   return localStorage.getItem ('cartItems')
  }

  productsAddToLocal(product :IProduct){
    this.products.push(product)
    let cartItems = localStorage.getItem('cartItems');
    if(!cartItems){
      localStorage.setItem('cartItems',JSON.stringify(this.products))
    }else{
     this.cartData = JSON.parse(cartItems)
      this.cartData.push(product)
      localStorage.setItem('cartItems',JSON.stringify(this.cartData))
    } 
  }

  productExisted(product :IProduct):boolean{
   return this.products.findIndex(item =>item.id ==product.id) > -1;
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
      this.products =this. products.filter(product =>product.id != productId)
      localStorage.setItem('cartItems',JSON.stringify(this.products))
    }
  }

  storeFavoraiteproducts(product :IProduct){
    this.favoraiteItems.push(product)
    localStorage.setItem('favoraiteItems',JSON.stringify([product]))
  }

 storeFavoraiteProduct(product :IProduct){
  let favoraiteProducts = localStorage.getItem('favoraiteItems')
  if(!favoraiteProducts){
    localStorage.setItem('favoraiteItems',JSON.stringify([product]))
  }else{
    this.favoraiteItems =JSON.parse(favoraiteProducts)
   this.favoraiteItems.push(product)
   localStorage.setItem('favoraiteItems',JSON.stringify(this.favoraiteItems))
  }
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

  storeTotal(total :number){
    localStorage.setItem('cartTotal',JSON.stringify(total.toFixed(2)))
  }

  getTotal() :number{
  return JSON.parse(localStorage.getItem('cartTotal') !)
  }

}