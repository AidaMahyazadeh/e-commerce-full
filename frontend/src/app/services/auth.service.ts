import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignUpForm from '../models/signUpForm.model';
import ILoginForm from '../models/loginForm.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:8000/';

  constructor(private http :HttpClient) { }

  signUp ( signUpForm : ISignUpForm) {
   return this.http.post (`${this.baseUrl}signup`,signUpForm)
  }

  login (loginForm : ILoginForm)  {
   return this.http.post (`${this.baseUrl}login`,loginForm)
  }

  getAllUsers () {
    return this.http.get (`${this.baseUrl}users`)
  }

  storeToken (tokenValue : string){
    localStorage.setItem ('token',tokenValue)
  }

  getToken (){
    return localStorage.getItem ('token')
  }

  isLoggedin ()  {
     return (!!localStorage.getItem ('token'))
  }
   logout () {
    return localStorage.clear ()
   }
}
