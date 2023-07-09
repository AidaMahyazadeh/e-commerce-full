import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  crownIcon = './assets/icons/crown.svg';
  cartItems !:number;
  constructor (
    private auth : AuthService,
    private router :Router,
    private cart :CartService
    ){}

    ngOnInit(): void {
      this.cart.getProducts().subscribe(
        res=>this.cartItems = res.length
      )
    }

    isLoggedin (){
      return this.auth.isLoggedin()
    }
   
    logout () {
      this.auth.logout ();
      this.cart.removeAllCartItem();
      this.router.navigate (['']);
    }
}
