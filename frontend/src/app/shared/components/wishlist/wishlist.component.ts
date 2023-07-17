import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import IProduct from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  products !:IProduct[];

constructor(
  private cartService : CartService,
  private router :Router 
  ){}

  ngOnInit(): void {
  this.cartService.getProducts().subscribe( res =>{
    this.products =res
  })
  }
  removeProduct(product:IProduct){
    this.cartService.removeItem(product)
  }

  removeAllProducts(){
    this.cartService.removeAllCartItem()
  }

  addItem(){
    this.router.navigate(['/products'])
  }

}
