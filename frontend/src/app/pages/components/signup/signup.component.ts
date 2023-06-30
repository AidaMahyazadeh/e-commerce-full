import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpForm !:FormGroup ;
  type = 'password';
  isText = false;
  eyeIcon = 'fa-eye-slash'; 
  //Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character.
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

constructor(private auth :AuthService,private router :Router){}

ngOnInit(): void {
  this.signUpForm = new FormGroup({
    firstname : new FormControl ('',Validators.required),
    lastname : new FormControl ('',Validators.required),
    username : new FormControl ('', Validators.required),
    email : new FormControl ('',[Validators.required,Validators.email]),
    password : new FormControl ('',[Validators.required,Validators.pattern(this.passwordPattern)])
  })
}

hideOrShowPassword () {
  this.isText = !this.isText;
  this.isText ? this.type = 'text' : this.type = 'password';
  this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
  }

  onSignUp (){
    if (this.signUpForm.valid){
       this.auth.signUp (this.signUpForm.value).subscribe ({
        next : (res=>{
          this.signUpForm.reset ();
          this.router.navigate (['login'])
          // alert ('You have signed up successfully.') 
        }),
        error : (err => {
          
        })
      })
    
    }else{
      ValidateForm.validateAllFields (this.signUpForm)
    }
  }

}
