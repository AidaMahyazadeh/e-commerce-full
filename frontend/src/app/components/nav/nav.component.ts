import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, concatMap } from 'rxjs';
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
  favoraiteItemsLength !:number;
  favoraiteItemsSubject$ = new BehaviorSubject <number>(0)
  
   
  constructor (
    private authStorage :AuthStorageService ,
    private router :Router,
    private cart :CartService,
    private modalService :NgbModal,
    private wishlistService :WishlistService

    ){}
 

    ngOnInit(){
      this.cart.getProducts().subscribe(
        res=>{
          this.cartItems = res.length
           this.getLengthOfFavoraiteItems()
        }
      )
      
     
    } 

   getLengthOfFavoraiteItems(){
    this.wishlistService.wishListSubject$.subscribe(
      res => {
        this.favoraiteItemsLength = res.length
      }
    )
    // this.wishlistService.wishListSubject$.subscribe(
    //   res  =>{
    //     this.favoraiteItemsLength = res.length
    //     this.favoraiteItemsSubject$.next(this.favoraiteItemsLength)
    //   }
    // )
     //this.wishlistService.getProducts().subscribe(
    //    this.wishlistService.getWishListProduct().subscribe(
    //   res =>{
    //      this.favoraiteItemsLength= res.length
    //      this.favoraiteItemsSubject$.next(this.favoraiteItemsLength)
    //   }
    // )
   }
   
    isLoggedin (){
      return this.authStorage.isLoggedin()
    }
   
    logout () {
      this.authStorage.logout ();
      this.router.navigate (['']);
    }

    open(){
     const modalRef = this.modalService.open(CartComponent, {scrollable: true,animation :true,modalDialogClass : 'float-end' ,size :'lg'})
    }
}
