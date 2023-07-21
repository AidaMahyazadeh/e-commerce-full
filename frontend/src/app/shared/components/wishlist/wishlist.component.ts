import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import IProduct from '../../models/product.model';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  whishListProducts !:IProduct[];

constructor(
  private cartService : CartService,
  private router :Router ,
  private whishListService :WishlistService
  ){}

  ngOnInit(): void {
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

}
