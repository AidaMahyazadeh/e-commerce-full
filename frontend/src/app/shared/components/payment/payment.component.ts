import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 cartTotal :number =0;
  constructor(
    private authStorage :AuthStorageService
  ){}

  ngOnInit() {
   this.cartTotal = this.authStorage.getTotal()
  }
}
