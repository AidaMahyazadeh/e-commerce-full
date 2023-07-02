import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";

@Injectable({
  providedIn : 'root'
})

export class AdminAuthGuard {
  constructor (
    private auth :AuthService,
    private router : Router,
    private toast :NgToastService
    ){}

    canActivate (): boolean{
      if (!this.auth.isAdmin()){
        this.router.navigate ([''])
        this.toast.warning ({detail : 'warning' ,summary :'you can not access to this page.'})
      }
        this.auth.isAdmin()
        return true
      }
    }