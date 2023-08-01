import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  crownIcon = './assets/icons/crown.svg';
  cartItems !:number;
  favoraiteItems !:number;
  
   
  constructor (
    private authStorage :AuthStorageService ,
    private router :Router,
    private cart :CartService,
    private modalService :NgbModal,
    private wishlistService :WishlistService
    ){}

    ngOnInit(){
      this.cart.getProducts().subscribe(
        res=>this.cartItems = res.length
      )
      this.wishlistService.getProducts().subscribe(
        res => this.favoraiteItems = res.length
      )
    } 

  
    isLoggedin (){
      return this.authStorage.isLoggedin()
    }
   
    logout () {
      this.authStorage.logout ();
      this.router.navigate (['']);
    }

    open(){
     const modalRef = this.modalService.open(CartComponent, {scrollable: true,animation :true})
    }
}
