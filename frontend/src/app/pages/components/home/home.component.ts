import { Component, OnInit } from '@angular/core';
import categories from '../../../../assets/data/data.json';
import ICategory from 'src/app/models/category.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories ! :ICategory [];
ngOnInit(): void{
 this.categories =categories;
}
}
