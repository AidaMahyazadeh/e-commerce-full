import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IProduct from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productsList :IProduct [] = []; 
 productQuantity !:number;
 constructor (
  private products :ProductsService,
  private router :Router
  ){}
 
  ngOnInit(): void {
   this.products.getProducts().subscribe( res => this.productsList =res  
 ) 
  }  

  buyProduct (id :number) {
   this.router.navigate(['cart'])
  }
}



