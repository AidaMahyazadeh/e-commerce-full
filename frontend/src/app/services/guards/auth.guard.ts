import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn : 'root'
})

export class AuthGuard {
  constructor (
    private auth :AuthService,
    private router : Router,
    private toast :NgToastService
    ){}

    canActivate (): boolean{
      if (! this.auth.isLoggedin()){
        this.router.navigate (['login'])
        this.toast.warning ({detail : 'warning' ,summary :'you should login first.'})
      }
        this.auth.isLoggedin()
        return true
      }
    }

