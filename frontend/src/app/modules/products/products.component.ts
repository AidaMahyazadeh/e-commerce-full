import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productsList :IProduct [] = []; 
 productQuantity =0;
 constructor (private products :ProductsService){}
 
  ngOnInit(): void {
   this.products.getProducts().subscribe(res =>{
    console.log(res)
     this.productsList = res 
    
   }
    ) 
  }
   
}



