import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
 categorySelected !:string;
 ProductsBycategory$ !:Observable <IProduct[]>
 page = 1;
 pageSize = 4;

 constructor(
  private productService :ProductsService,
  private activatedRout :ActivatedRoute,
  private cart :CartService,
  private router:Router
  ) {}
  
  ngOnInit(): void {
    this.activatedRout.params.subscribe(params =>{
    this.categorySelected= params['category']
    this.ProductsBycategory$= this.productService.getProductsByCategory(this. categorySelected)
    }
    )
  }
  
  addItemToCart(product :IProduct) {
    this.cart.addItems(product)
    }
 
   goBackToProducts (){
    this.router.navigate(['products'])
   }

}
