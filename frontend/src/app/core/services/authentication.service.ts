import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ILoginForm from 'src/app/shared/models/loginForm.model';
import ISignUpForm from 'src/app/shared/models/signUpForm.model';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:8000/';
  
  constructor(private http : HttpClient) { }

  signUp ( signUpForm : ISignUpForm) {
    return this.http.post (`${this.baseUrl}signup`,signUpForm)
   }
 
   login (loginForm : ILoginForm) :Observable<any> {
    return this.http.post (`${this.baseUrl}login`,loginForm)
   }
 
   
  getAllUsers ()   {
    return this.http.get (`${this.baseUrl}users`)
  }
  
}
