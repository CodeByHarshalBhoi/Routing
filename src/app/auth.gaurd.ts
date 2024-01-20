import { Inject } from "@angular/core"
import { AuthService } from "./services/auth.service"
import { Router } from "@angular/router";

export const canActivate = () =>{
const authservice:AuthService = Inject(AuthService);
const router:Router = Inject(Router);
debugger;
  if(authservice.isAuthenticated()){
    return true;
  }else{
    router.navigate(['/login'])
    return false;
  }
}
