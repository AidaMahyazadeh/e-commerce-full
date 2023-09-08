import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit{
 categories :string [] = []; 
 newCategory !:string;
 constructor(
  private productService :ProductsService,
  ){}
  
 ngOnInit(){
   this.productService.getAllCategories().subscribe(
    res => {
      this.categories=res
    }
   )
 }
 onAddCategories(category :string) {
this.categories.push(category)
 this.newCategory =''
 }
}
