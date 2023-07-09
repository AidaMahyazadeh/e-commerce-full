import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  token !:string;
  constructor() { }

  isLoggedin ()  {
    return (!!localStorage.getItem ('token'))
 }
  logout () {
   return localStorage.clear ()
  }

  storeToken (tokenValue : string){
    localStorage.setItem ('token',tokenValue)
  }

  getToken (){
    return this.token  =localStorage.getItem ('token')!
  }

  storeRole (role :string) {
    localStorage.setItem ('role' ,role)
  }

  getRole () {
    return  localStorage.getItem('role')
  }
}
