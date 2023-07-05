import { Component, OnInit } from '@angular/core'
import IProduct from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products !:IProduct[];
  totalPrice =0;

 constructor (private cart :CartService){}
   
 ngOnInit(): void {
   this.cart.getProducts().subscribe(
    res =>{
      this.products =res
      this.products.forEach(product =>{
        Object.assign(this.products,{totalPrice : 0})
      })
      this.totalPrice=this.cart.getTotalPrice()
    }
   )
 }

 removeProduct(product:IProduct){
  this.cart.removeCartItem(product) 
 }

 removeAllProducts (){
  this.cart.removeAllCartItem()
 }

 }

