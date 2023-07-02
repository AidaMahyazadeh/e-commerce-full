import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignUpForm from '../models/signUpForm.model';
import ILoginForm from '../models/loginForm.model';
import { Observable} from 'rxjs';
import IUser from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:8000/';
user !:IUser ;
token !:string;



  constructor(private http :HttpClient) { }

  signUp ( signUpForm : ISignUpForm) {
   return this.http.post (`${this.baseUrl}signup`,signUpForm)
  }

  login (loginForm : ILoginForm) :Observable<any> {
   return this.http.post (`${this.baseUrl}login`,loginForm)
  }

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

  isAdmin () {
   let role= this.getRole()
   return role ==='admin'
  }

  getAllUsers () {
    return this.http.get (`${this.baseUrl}users`)
  }
 
}
