import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private authStorage :AuthStorageService
    ) { }

    isAdmin () {
      let role= this.authStorage.getRole()
      return role ==='admin'
     }
}
