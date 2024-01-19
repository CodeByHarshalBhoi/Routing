import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@ViewChild('username') usernme:ElementRef;
@ViewChild('password') password:ElementRef;



constructor(private authService:AuthService, private router:Router){

}


OnLogIn(){
  debugger
    const username = this.usernme.nativeElement.value;
    const password = this.password.nativeElement.value;
   const user= this.authService.login(username, password);

   if(user === undefined){
    alert("The credential are incorrect");
   }else{
    alert('Wel-come '+user.name + 'You are logged in...')
    this.router.navigate(['/courses'])
   }
}
}
