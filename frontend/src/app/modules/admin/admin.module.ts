import { NgModule, forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UsersListComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    ModalProductComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ProductsModule,
    ReactiveFormsModule
  ],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => AdminProductsComponent),
  //     multi: true
  //   }
  // ]
})
export class AdminModule { }
