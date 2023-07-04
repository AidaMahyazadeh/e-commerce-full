import { Component, OnInit } from '@angular/core';
import categories from '../../../../assets/data/data.json';
import ICategory from 'src/app/models/category.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories ! :ICategory [];
  constructor (private category : ProductsService){}
ngOnInit(): void{
 this.category.getCategories().subscribe(res =>this.categories=res)
}
}
