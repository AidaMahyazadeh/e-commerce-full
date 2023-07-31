import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { AdminAuthGuard } from './core/services/guards/admin-auth.guard';
import { WishlistComponent } from './shared/components/wishlist/wishlist.component';
import { AuthGuard } from './core/services/guards/auth.guard';
import { PaymentComponent } from './shared/components/payment/payment.component';


const routes: Routes = [
  {path : '',pathMatch : 'full',component :LoginComponent},
  {path : 'home',component:HomeComponent ,canActivate :[AuthGuard]},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path :'wishlist', component :WishlistComponent,canActivate :[AuthGuard]},
  {path :'payment',component :PaymentComponent,canActivate :[AuthGuard]},
  {path :'products',loadChildren : () =>import('./modules/products/products.module').then (m =>m.ProductsModule)},
  { path: 'admin',canActivate : [AdminAuthGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
