import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { LoginComponent } from './pages/components/login/login.component';
import { SignupComponent } from './pages/components/signup/signup.component';

import { CartComponent } from './pages/components/cart/cart.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path :'cart' , component : CartComponent,
    canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
