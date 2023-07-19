import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticationService } from 'src/app/core/services/authentication.service';



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
  emailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

constructor(
  private auth : AuthenticationService,
  private router : Router,
  private toast : NgToastService
  ){}

ngOnInit(): void {
  this.signUpForm = new FormGroup({
    firstname : new FormControl ('',Validators.required),
    lastname : new FormControl ('',Validators.required),
    username : new FormControl ('', Validators.required),
    email : new FormControl ('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
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
          //console.log(res)
          this.toast.success({
            detail : 'SUCCESS',
            summary : `welcome ${this.signUpForm.controls['firstname'].value}`,
            duration :3000
          })
          this.signUpForm.reset ();
          this.router.navigate (['login'])
        }),
        error : (err => {
          this.toast.error ({
            detail : 'ERROR',
            summary : err?.error.message
          })
        })
      })
    
    }else {
      this.toast.warning({
        detail : 'warning',
        summary : 'You should fill in all fields.',
        duration : 3000 
      })
    }
  }

}
