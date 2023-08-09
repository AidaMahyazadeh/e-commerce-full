import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  showContent = false
  constructor(private router :Router){}


 getRoute(){
  if (this.router.url.endsWith('/admin')) {
    return this.showContent = false
  }
  return this.showContent = true
 }
  
}
