import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import admin from '../../assets/data/admin.json'
import ILoginForm from '../models/loginForm.model';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  adminusername = admin.username;
  adminPassword = admin.password;
  adminLoginForm = {username : this.adminusername,
                    password : this.adminPassword}
 
  constructor(private auth : AuthService) { }
 
 loginAdmin(adminLoginForm :ILoginForm){
  return this.auth.login(adminLoginForm)
 } 
}
