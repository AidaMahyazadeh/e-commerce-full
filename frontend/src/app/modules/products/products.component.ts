import { Component, OnInit } from '@angular/core';
import { Subject, combineLatest, map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 quantity !:number ;
 selectedCategory !:string;
 productsList$ = this.productsService.getAllProducts();
 selectedCategorySubject = new Subject <string>();
 selectedCategoryAction$ = this.selectedCategorySubject.asObservable();
 
 constructor (
  private productsService :ProductsService,
  private cart :CartService
  ){}
 

   filteredProducts$ = combineLatest(([
    this.productsList$,
    this.selectedCategoryAction$
  ])).pipe(
     map(([products,selectedCategory])=>{
      return products.filter(product =>
          product.category ===selectedCategory
        )
     })
   )

//  filteredProducts$ = this.productsService.getAllProducts().pipe (
//   map(products => {
//     return products.filter (product => product.category===this.selectedCategory)
//   })
//  )
 
   onShowSelectedCategory(newCategory:string){ 
    this.selectedCategory=newCategory
    this.selectedCategorySubject.next(this.selectedCategory)
    // console.log(this.selectedCategory,typeof this.selectedCategory)
    }

    addItemToCart(product :IProduct) {
      this.cart.addToCart(product)
      }
}



