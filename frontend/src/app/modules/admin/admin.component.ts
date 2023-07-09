import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users !: IUser [];
  
 constructor (private auth :AuthService){}

 ngOnInit(): void {
  
  this.auth.getAllUsers ().subscribe (
    res  =>{
      for ( let [key ,value] of Object.entries(res)){
        key === 'data' ? this.users =value : this.users = []
       }  
      }
     )  
    } 
 }
