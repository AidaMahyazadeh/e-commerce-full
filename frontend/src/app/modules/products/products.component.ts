import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import hats from '../../../assets/data/hat-data.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productsList :IProduct [] = []; 
 constructor (private products :ProductsService){}
 
 ngOnInit(): void {
  //  this.products.getHats().subscribe(
  // //  res => this.productsList = res
  // res => {
  //   this.productsList = res
  // }
  //  )  
  
 }

}
