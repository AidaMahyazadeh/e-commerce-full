import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { AuthGuard } from './core/services/guards/cart-auth.guard';
import { AdminAuthGuard } from './core/services/guards/admin-auth.guard';


const routes: Routes = [
  {path : '', component:LoginComponent,pathMatch : 'full'},
  {path : 'home',component:HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path :'cart' , component : CartComponent,
    canActivate : [AuthGuard]},
  {path :'products', loadChildren : () =>import('./modules/products/products.module').then (m =>m.ProductsModule)},
  { path: 'admin',canActivate : [AdminAuthGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
