import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
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
 productsList$ :Observable<IProduct[]>= this.productsService.getAllProducts();
 page = 1;
 pageSize = 4;


 constructor (
  private productsService :ProductsService,
  private cart :CartService,
  private router :Router,
  private localeStorage :AuthStorageService
  ){}
 
   

   onShowSelectedCategory(newCategory:string){ 
    this.selectedCategory=newCategory
    this.router.navigate ([`products/${this.selectedCategory}`])
    // console.log(this.selectedCategory,typeof this.selectedCategory)
    }

    addItemToCart(product :IProduct) {
      this.cart.addItems(product)
      this.localeStorage.productsAddToLocal(product)
      }
}


