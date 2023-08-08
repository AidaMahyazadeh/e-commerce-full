import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
payPalConfig ?:IPayPalConfig;
showSuccess !:boolean;
showError !:boolean;
showCancel !:boolean;
cartTotal :number =0;

  constructor(
    private authStorage :AuthStorageService,
    private router : Router
  ){}

  ngOnInit() {
   this.cartTotal = this.authStorage.getTotal();
   this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        // clientId: `${environment.client_ID}`,
        clientId :'AdHCedh2wU5YvAsaBMUQFXSrqh3DhPq5Ab4CeOh9GYeUrzuVSjpTtWMZh-cBSK__Nffo1_aQZxhAB5Yx',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: `${this.cartTotal}`,
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: `${this.cartTotal}`
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: `${this.cartTotal}`,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            if(data.status ==='COMPLETED'){
               this.cartTotal = 0 
               this.router.navigate(['success'])
            }
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        
    }
}
}
}
