import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  categories = ['Hats','Jewelery','Women','Men','Eletronic']
  @Output() showCategory =new EventEmitter <string>()
  selectedCategory :string='';
  constructor(){} 
  
  onShowCategory (event :Event){
    this.selectedCategory= (event.target as HTMLSelectElement).value
    this.showCategory.emit(this.selectedCategory) 
     console.log(this.selectedCategory,typeof this.selectedCategory)
   }
}
