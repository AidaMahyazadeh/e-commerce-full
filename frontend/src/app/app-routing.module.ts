import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { LoginComponent } from './pages/components/login/login.component';
import { SignupComponent } from './pages/components/signup/signup.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { AdminComponent } from './pages/components/admin/admin.component';
import { AdminAuthGuard } from './services/guards/admin-auth.guard';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path :'cart' , component : CartComponent,
    canActivate : [AuthGuard]},
  {path : 'admin' , component : AdminComponent,
   canActivate : [AdminAuthGuard] },
    {path :'products', loadChildren : () =>import('./modules/products/products.module').then (m =>m.ProductsModule)}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
