import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

const routes: Routes = [{ path: '', component: AdminComponent, children : [
  { path : 'users-list' ,component :UsersListComponent},
  {path :'category',component : AdminCategoryComponent},
  {path :'product', component :AdminProductsComponent}

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
