import { Component, OnInit } from '@angular/core';
import ICategory from 'src/app/models/category.model';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories$ ! : Observable<ICategory []>;
  constructor (private category : ProductsService){}
ngOnInit(): void{
  this.categories$ =this.category.getCategories()
//  this.category.getCategories().subscribe(res =>this.categories=res)
 }
}
