import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subject, map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() category !:string;
// selectedCategorySubject = new Subject <string>();


constructor(
  private activatedRoute :ActivatedRoute,
  private productsService :ProductsService,
  private cart :CartService
  ){}
 
 

ngOnInit(): void {

}
  
//  filteredProduct$ = this.productsService.getAllProducts().pipe (
//   map(products => {
//     return products.filter (product => product.category===this.category)
//   })
//  )
  // getProductsByCategory (newCategory:string):Observable <IProduct[]>{
  //     return this.productsService.getAllProducts().pipe(
  //       map(products =>products.filter(product =>product.category===this.category))
  //     );
  // }
   
  addItemToCart(product :IProduct) {
    this.cart.addToCart(product)
    }

}
