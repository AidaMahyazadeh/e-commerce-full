import { Component, OnInit } from '@angular/core';
import IProduct from '../../models/product.model';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  whishListProducts !:IProduct[];

constructor(
  private router :Router ,
  private whishListService :WishlistService,
  private cartService :CartService
  ){}

  ngOnInit() {
    this.whishListService.getProducts().subscribe(res =>{
    this.whishListProducts=res
    }
    )
  }
  
  removeProduct(id:number){ 
   this.whishListService.removeFromWishList(id) 
  }

  removeAllProducts(){
   this.whishListProducts =[]
   this.whishListService.clearWishList()
  }

  addItem(){
    this.router.navigate(['/products'])
  }

  addToCart(product :IProduct) {
     product.favoraite =false
     this.cartService.addItems(product)
     this.whishListService.removeFromWishList(product.id)
  }
}