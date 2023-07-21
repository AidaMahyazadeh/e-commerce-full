import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { map } from 'rxjs';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm !:FormGroup;  
type = 'password';
isText =false;
eyeIcon ='fa-eye-slash';


constructor (
  private auth :AuthenticationService,
  private authStorage :AuthStorageService,
  private router :Router,
  private toast :NgToastService,
 
   ) {}

ngOnInit(): void {
  this.loginForm = new FormGroup ({
    username : new FormControl ('',Validators.required),
    password : new FormControl ('', Validators.required) 
  })
}

hideOrShowPassword () {
this.isText = !this.isText;
this.isText ? this.type = 'text' : this.type = 'password';
this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
}

onLogin () {
  if (this.loginForm.valid){  
  this.auth.login(this.loginForm.value).subscribe( {
    next :(res) =>{
     //  console.log(res)
    this.authStorage.storeToken (res.token)
    this.authStorage.storeRole(res.user.role)
    res.user.role ==='admin' ?  this.router.navigate (['admin']) : this.router.navigate (['home'])
    this.toast.success({
      detail : 'SUCCESS',
      summary : 'You are logged in.',
      duration :3000
    })
    },error :(err ) =>{
      this.toast.error ({
        detail : 'Error',
        summary : err.error.message
      })
    }
  }
    ) 
  }else{
    this.toast.warning ({
      detail : 'warning',
      summary : 'You should fill in all fields .'
    })
  }
}
}

 
