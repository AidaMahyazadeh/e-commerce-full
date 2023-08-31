import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    CategoryComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbPagination
  ],
  exports : [RouterModule,SearchComponent]
})
export class ProductsModule { }
