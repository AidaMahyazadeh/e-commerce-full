import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignUpForm from '../models/signUpForm.model';
import ILoginForm from '../models/loginForm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// baseUrl = 'mongodb+srv://aidamahyazadeh83:PUMSwoVyMHSbT6nm@mydatabase.5ppsqdv.mongodb.net/';
baseUrl = 'http://localhost:8000/';

  constructor(private http :HttpClient) { }

  signUp ( signUpForm : ISignUpForm) {
   return this.http.post (`${this.baseUrl}signup`,signUpForm)
  }

  login (loginForm : ILoginForm) {
   return this.http.post (`${this.baseUrl}login`,loginForm)
  }
}
