import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  constructor(
    private router :Router,
    private authStorageService :AuthStorageService
  ){}

  goBackToHome(){
    this.authStorageService.clearTotal()
    this.authStorageService.clearPaypalStorage()
    this.router.navigate(['/home'])
  }
}
