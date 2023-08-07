import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'
import { AppRoutingModule } from './app-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './modules/products/products-routing.module';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WishlistComponent } from './shared/components/wishlist/wishlist.component';
import { PaymentComponent } from './shared/components/payment/payment.component';
import { NavComponent } from './components/nav/nav.component';
import { SuccessComponent } from './shared/components/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    WishlistComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    ProductsRoutingModule,
    FormsModule,
    NgbModalModule,
    NgxPayPalModule,
  ],
  providers: [
    {
    provide :HTTP_INTERCEPTORS,
    useClass :AuthInterceptor,
    multi :true
  }
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
