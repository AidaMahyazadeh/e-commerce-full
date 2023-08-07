import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 sidebarList = [
  {title : 'Users-List', link :'users-list'},
  {title : 'category', link :'/category'},
  {title : 'products', link :'/products'}
 ]


}
