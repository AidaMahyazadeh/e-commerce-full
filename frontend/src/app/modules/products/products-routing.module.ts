import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
 {path : '' , component :ProductsComponent,pathMatch:'full' },
 {path :':category' ,component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
