import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';


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
  private auth :AuthService,
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
  this.auth.login(this.loginForm.value).subscribe( res =>{
    console.log (res) 
    this.auth.storeToken (res.token)
    this.auth.storeRole(res.user.role)
    if (res.user.role === 'admin'){
      this.router.navigate (['admin'])
    }else{
    this.router.navigate (['cart'])
    }
    this.toast.success({
            detail : 'SUCCESS',
            summary : 'You are logged in.',
            duration :3000
          })
    

    
  //   next : (res => {
  //   console.log (res)
  //     this.loginForm.reset ();
  //     for(let [key,value] of Object.entries(res)){
  //       if (key == 'token'){
  //         this.auth.storeToken(value)
    
  //       }
  //     }
  //     this.toast.success({
  //       detail : 'SUCCESS',
  //       summary : 'You are logged in.',
  //       duration :3000
  //     })
  //   }),
  //   error :(err =>{
  //     this.toast.error ({
  //       detail : 'ERROR',
  //       summary : err?.error.message
  //     })
  //   })
    }
    )
    
  }else{
    ValidateForm.validateAllFields (this.loginForm)
  }
}

}
