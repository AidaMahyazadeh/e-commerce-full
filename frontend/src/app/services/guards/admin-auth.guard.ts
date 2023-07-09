import { Injectable, inject } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";

export const AdminAuthGuard = () =>{
  const auth = inject(AuthService)
  const router = inject (Router)
  const toast = inject(NgToastService)
      if(!auth.isAdmin()){
        router.navigate([''])
        toast.warning ({detail : 'warning' ,summary :'you can not access to this page.',
                 duration : 3000
              })
              return false;
      }
      
      return true
}

// @Injectable({
//   providedIn : 'root'
// })

// export class AdminAuthGuard {
//   constructor (
//     private auth :AuthService,
//     private router : Router,
//     private toast :NgToastService
//     ){}

//     canActivate (): boolean{
//       if (!this.auth.isAdmin()){
//         this.router.navigate ([''])
//         this.toast.warning ({detail : 'warning' ,summary :'you can not access to this page.',
//         duration : 3000
//       })
//       }
//         this.auth.isAdmin()
//         return true
//       }
//     }

  