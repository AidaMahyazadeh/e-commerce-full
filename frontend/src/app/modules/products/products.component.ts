import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
 quantity !:number ;
 selectedCategory !:string;
 productsList$ = this.productsService.getAllProducts();
 ProductsBycategory$ !:Observable <IProduct[]>
//  ProductsBycategory$= this.productsService.getProductsByCategory(this.selectedCategory)

 
 constructor (
  private productsService :ProductsService,
  private cart :CartService
  ){}
 
  getProductsCategory(category :string){
    return this.ProductsBycategory$= this.productsService.getProductsByCategory(category)
  } 

   onShowSelectedCategory(newCategory:string){ 
    this.selectedCategory=newCategory
    this.getProductsCategory(this.selectedCategory)
    // console.log(this.selectedCategory,typeof this.selectedCategory)
    }

    addItemToCart(product :IProduct) {
      this.cart.addToCart(product)
      }
}


//  selectedCategorySubject = new Subject <string>();
//  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  // getProductsCategory(){
  //   this.productsService.getProductsByCategory(this.selectedCategory)
  // }


  //  filteredProducts$ = combineLatest(([
  //   this.productsList$,
  //   this.selectedCategoryAction$
  // ])).pipe(
  //    map(([products,selectedCategory])=>{
  //     return products.filter(product =>
  //         product.category ===selectedCategory
  //       )
  //    })
  //  )

//  filteredProducts$ = this.productsService.getAllProducts().pipe (
//   map(products => {
//     return products.filter (product => product.category===this.selectedCategory)
//   })
//  )