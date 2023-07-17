import { Component, OnInit } from '@angular/core'
import IProduct from '../../models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products !:IProduct[];
  totalPrice :number=0;
  total =0;
  addedToWishList =false;
  

 constructor (
  private cart :CartService,
  private activeModal :NgbActiveModal,
  private router:Router
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
  this.cart.removeItem(product) 
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
this.addedToWishList =true;
this.cart.removeItem(product)
this.router.navigate(['wishlist'])
 }

 removeItemFromWishList(){
this.addedToWishList =false;
 }

 changeQuantity(){
 this.getTotal()
 }

 }

