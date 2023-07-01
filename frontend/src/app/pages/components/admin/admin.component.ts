import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import IUser from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users : IUser[] = []
 constructor (private auth : AuthService){}

 ngOnInit(): void {
  
   
 }
}
