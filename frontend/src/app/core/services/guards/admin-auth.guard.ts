import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthorizationService } from '../authorization.service';

export const AdminAuthGuard = () =>{
  const auth = inject(AuthorizationService)
  const router = inject (Router)
  const toast = inject(NgToastService)
      if(!auth.isAdmin()){
       
      toast.warning ({detail : 'warning' ,summary :'you can not access to this page.',
                 duration : 3000
              })
              return false
      }
     
      return true
}
