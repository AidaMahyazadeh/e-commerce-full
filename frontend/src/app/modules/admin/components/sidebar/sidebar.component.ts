import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 sidebarList = [
  {title : 'Users-List', link :'users-list',active : false},
  {title : 'category', link :'category'},
  {title : 'products', link :'product'}
 ]
 constructor(){}
 ngOnInit(): void {
   
 }
 
 onchangeLink (index:number){
  this.sidebarList.forEach((item,i)=>{
   this.sidebarList[i].active = false;
  })
  this.sidebarList[index].active = true
 }
}
