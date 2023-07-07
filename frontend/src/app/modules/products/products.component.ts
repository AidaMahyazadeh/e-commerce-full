import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import IProduct from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productsList$ !:Observable <IProduct []> ; 
 quantity !:number ;
 
 constructor (
  private products :ProductsService,
  private router :Router,
  private cart :CartService
  ){}
 
  ngOnInit(): void {
      this.productsList$ = this.products.getProducts()
//    this.products.getProducts().subscribe( res => 
//     this.productsList =res  
//  ) 
  }  

  addItemToCart(product :IProduct) {
  this.cart.addToCart(product)
  }
}



