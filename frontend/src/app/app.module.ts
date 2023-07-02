import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/components/home/home.component';
import { SignupComponent } from './pages/components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/components/login/login.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { AdminComponent } from './pages/components/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    AdminComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
