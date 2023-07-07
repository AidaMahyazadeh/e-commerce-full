import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { AuthService } from "../auth.service";



export const AuthGuard = ()=>{
  const auth = inject(AuthService)
  const router = inject (Router)
  const toast = inject(NgToastService)

  if (!auth.isLoggedin()){
    router.navigate (['login'])
    toast.warning ({detail : 'warning' ,
    summary :'you should login first.',
    duration :3000 
  })
  }
  auth.isLoggedin()
  return true;
}
// @Injectable({
//   providedIn : 'root'
// })

// export class AuthGuard {
//   constructor (
//     private auth :AuthService,
//     private router : Router,
//     private toast :NgToastService
//     ){}

//     canActivate (): boolean{
//       if (! this.auth.isLoggedin()){
//         this.router.navigate (['login'])
//         this.toast.warning ({detail : 'warning' ,summary :'you should login first.'})
//       }
//         this.auth.isLoggedin()
//         return true
//       }
//     }


   
