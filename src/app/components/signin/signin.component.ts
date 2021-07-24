import { NgZone } from '@angular/core';
import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Login } from 'src/app/Login';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login:Login = {email:"nireekshshetty19@gmail.com",password:"Shetty@123"};
  title: string = "Create Account";
  msg:string = "Create Account"
  loggedIn:boolean = false;
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('cpassword') cpassword!: ElementRef;
  @ViewChild('createAccount') createAccount!: ElementRef;
  @ViewChild('signInorSignUp') signInorSignUp!: ElementRef;
  @ViewChild('terms') terms!: ElementRef;
  @ViewChild('submit') submit!: ElementRef;
  @ViewChild('forgot') forgot!: ElementRef;
  @ViewChild('facebook') facebook!: ElementRef;
  @ViewChild('google') google!: ElementRef;
  @ViewChild('email') email!: ElementRef;@ViewChild('password') password!: ElementRef;
  closed:boolean = true ;
  constructor(private diagRef:MatDialogRef<SigninComponent>,private ngZone: NgZone) {
    window.onresize = (e) =>
    {
        this.ngZone.run(() => {
            this.closediag();
            
        });
        
    };
  }
  

  ngOnInit(): void {
  }
  signinorSignup(){
    if(document.body.offsetWidth < 768){
      if(this.title == "Create Account")
        this.signInorSignUp.nativeElement.style.top = "175px";
      else{
        this.signInorSignUp.nativeElement.style.top = "255px"
      }
    }
    if(this.title == "Create Account")
    {
      this.fname.nativeElement.style.display="none";
      this.lname.nativeElement.style.display="none";
      this.cpassword.nativeElement.style.display="none";
      this.terms.nativeElement.style.display="none";
      this.createAccount.nativeElement.innerText = "Don't have an Account yet?"
      this.signInorSignUp.nativeElement.innerText = "Create new for Free!"
      this.forgot.nativeElement.style.display = "block";
      if(window.innerWidth < 768 )
        this.title = "Welcome Back!"
      else
        this.title = "Sign In"
      this.msg = "Sign In"
     }
    else{
      this.fname.nativeElement.style.display="block";
      this.lname.nativeElement.style.display="block";
      this.cpassword.nativeElement.style.display="block";
      this.terms.nativeElement.style.display="block";
      this.createAccount.nativeElement.innerText = "Already have an account?"
      this.signInorSignUp.nativeElement.innerText = "Sign In"
      this.forgot.nativeElement.style.display = "none";
      this.title = "Create Account"
      this.msg = "Create Account"
    }
  }
  closediag(){
    this.diagRef.close();
  }
  signin(){
    if(this.email.nativeElement.value == this.login.email)
    {
      if(this.password.nativeElement.value == this.login.password)
        this.loggedIn = true;
    }
  }
}
