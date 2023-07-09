import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  crownIcon = './assets/icons/crown.svg';
  cartItems !:number;
  constructor (
    private authStorage :AuthStorageService ,
    private router :Router,
    private cart :CartService
    ){}

    ngOnInit(): void {
      this.cart.getProducts().subscribe(
        res=>this.cartItems = res.length
      )
    }

    isLoggedin (){
      return this.authStorage.isLoggedin()
    }
   
    logout () {
      this.authStorage.logout ();
      this.cart.removeAllCartItem();
      this.router.navigate (['']);
    }
}
