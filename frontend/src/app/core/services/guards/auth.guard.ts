import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { NgToastService } from "ng-angular-popup"
import { AuthStorageService } from "../auth-storage.service"


export const AuthGuard = ()=>{
  const authStorage = inject(AuthStorageService)
  const router = inject (Router)
  const toast = inject(NgToastService)

  if (!authStorage.isLoggedin()){
    router.navigate (['login'])
    toast.warning ({detail : 'warning' ,
    summary :'you should login first.',
    duration :3000 
  })
  return false
  }
  
  return true;
}
