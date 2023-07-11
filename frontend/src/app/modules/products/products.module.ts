import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports : [RouterModule]
})
export class ProductsModule { }
