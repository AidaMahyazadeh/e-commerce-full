import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
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
  private authStorageService :AuthStorageService
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
