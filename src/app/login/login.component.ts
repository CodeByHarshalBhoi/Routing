import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
@ViewChild('username') usernme:ElementRef;
@ViewChild('password') password:ElementRef;



constructor(private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute){

}
  ngOnInit(): void {
 this.activatedRoute.queryParamMap.subscribe((queries)=>{
  const logout = Boolean(queries.get('logout'))
  if(logout){
    this.authService.logout();
    alert("You are log out......")
  }
 })
  }


OnLogIn(){
  // debugger
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
