import { Component, OnInit } from '@angular/core'
import IProduct from '../../models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products !:IProduct[];
  totalPrice :number=0;
  total =0;
  

 constructor (
  private cart :CartService,
  private activeModal :NgbActiveModal,
  private router:Router,
  private wishListService :WishlistService,
  private authStorage :AuthStorageService
  ){}
   
 ngOnInit(): void {
  this.getTotal()
 }
 
 getTotal(){
  this.cart.getProducts().subscribe(res =>{
    this.products=res;
    this.total =  this.products.reduce((acc,product)=>{
     return acc + (product.price*product.quantity)
    },0)
  })
 }

 removeProduct(product:IProduct){
 this.cart.removeItem(product.id)
 this.getTotal()
 }

 removeAllProducts (){
  this.cart.removeAllCartItem()
 }

 close(){
 this.activeModal.close()
 }

 addItems(){
  this.activeModal.close() 
  this.router.navigate(['/products'])
 }

 addItemToWishList(product :IProduct){
  this.toggleWishList(product)
  this.wishListService.addToWishList(product)
  this.cart.removeItem(product.id)
 }

 removeItemFromWishList(product:IProduct){
 this.toggleWishList(product)
 this.wishListService.removeFromWishList(product.id)
 }

 changeQuantity(id :number,quantity:number){
 this.getTotal()
 for(let product of this.products){
  if(product.id ==id){
    product.quantity==quantity 
  }
 }
 }

 toggleWishList(product :IProduct){
  product.favoraite =!product.favoraite
 }

checkout(){
  this.authStorage.storeTotal(this.total)
  this.router.navigate(['/payment'])
  this.close()
}

}