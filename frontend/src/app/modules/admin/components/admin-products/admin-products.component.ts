import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { ProductsService } from 'src/app/core/services/products.service';
import IProduct from 'src/app/shared/models/product.model';
import { ModalProductComponent } from '../modal-product/modal-product.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products :IProduct [] =[];
  subscription !:Subscription;
  discount :string ='0%';
  addedProduct =false;
  product !:IProduct 
  // products$ = new Subject()



 constructor (
  private productsService :ProductsService,
  private ngbModal :NgbModal
  ){}

 ngOnInit(): void {
 this.getAllProducts()
 }

getAllProducts(){
  this.subscription= this.productsService.getAllProducts().subscribe(
    res => {
      this.products= res;
    // this.products$.next(this.products)
    }

   )
}

 
 openModal(){
  const modalRef= this.ngbModal.open(ModalProductComponent,{scrollable: true,animation :true,modalDialogClass : 'float-center' ,size :'xl'})
  modalRef.componentInstance.product=this.product
  modalRef.componentInstance.newProductAdded.subscribe( (res: IProduct) =>{
    this.products.push(res)
  })

    // this.products$.next(this.products)
  }
 
  
 

 deleteProduct(id :number){
  this.products =this.products.filter (item => item.id !=id)
 }

 ngOnDestroy(): void {
   this.subscription.unsubscribe()
 }

}
