import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import IUser from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users !: IUser [];
  
  constructor (private auth :AuthenticationService){}
 
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
