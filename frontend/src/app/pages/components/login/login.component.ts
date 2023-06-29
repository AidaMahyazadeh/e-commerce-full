import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

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

  }else{
    ValidateForm.validateAllFields (this.loginForm)
  }
}



}
