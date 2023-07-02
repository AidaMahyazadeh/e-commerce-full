import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  crownIcon = './assets/icons/crown.svg';
  constructor (
    private auth : AuthService,
    private router :Router
    ){}

    isLoggedin (){
      return this.auth.isLoggedin()
    }
   
    logout () {
      this.auth.logout ();
      this.router.navigate (['']);
    }
}
