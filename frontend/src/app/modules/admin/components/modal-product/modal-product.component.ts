import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import IProduct from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {
 productForm !:FormGroup ;
 product !:IProduct;
  @Output() newProductAdded = new EventEmitter<IProduct>() 

constructor(
  private activeModal :NgbActiveModal
  ){}

ngOnInit(): void {
 this.productForm = new FormGroup({
  title : new FormControl(''),
  category : new FormControl(''),
  quantity : new FormControl(''),
  price :new FormControl(''),
  imageUrl :new FormControl('')
 })
}

  onShowCategory(category :string){
    this.productForm.controls['category'].setValue(category)
  }


  onSaveProduct(){
    this.product= this.productForm.value
    this.newProductAdded.emit(this.product)
    console.log( this.product)
    this.activeModal.close()
  }

}
