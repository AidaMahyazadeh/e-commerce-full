import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productsList$ !:Observable <IProduct []> ; 
 quantity !:number ;
 selectedCategory !:string
 
 constructor (
  private products :ProductsService,
  private cart :CartService
  ){}
 
  ngOnInit(): void {
      this.productsList$ = this.products.getAllProducts()
//    this.products.getProducts().subscribe( res => 
//     this.productsList =res  
//  ) 
  }  

  addItemToCart(product :IProduct) {
  this.cart.addToCart(product)
  }

  onShowSelectedCategory(newCategory:string){ 
    this.selectedCategory=newCategory
    // console.log(this.selectedCategory,typeof this.selectedCategory)
    }
}



