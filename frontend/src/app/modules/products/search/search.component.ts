import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  categories = ['Hats','Jewelery','Women','Men','Eletronic']
  @Output() showCategory =new EventEmitter <string>()
  category :string='';
  constructor(){} 
  
  onShowCategory (event :Event){
    this. category= (event.target as HTMLSelectElement).value
    this.showCategory.emit(this. category) 
     //console.log(this. category,typeof this. category)
   }
}
