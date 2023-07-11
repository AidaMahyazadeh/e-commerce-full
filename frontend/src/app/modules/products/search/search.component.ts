import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, distinct, map } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    // categories = ["men's clothing","women's clothing","jewelery","hats","eletronic"]
  categories$ = this.productService.getAllCategories()
  categoriesunique : string[]=[]
  @Output() showCategory =new EventEmitter <string>()
  category :string='';
 
  constructor(private productService :ProductsService){} 

  onShowCategory (event :Event){
    this. category= (event.target as HTMLSelectElement).value
    this.showCategory.emit(this. category) 
     //console.log(this. category,typeof this. category)
     
   }
}
