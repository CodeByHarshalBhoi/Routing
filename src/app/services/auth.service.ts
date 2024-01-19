import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false

  constructor(private userServise: UserService) { }

  login(username: string, passord: string) {
    let user = this.userServise.users.find((userFind) => userFind.username === username && userFind.password === passord)
    if (user === undefined) {
      this.isLogged = false
    } else {
      this.isLogged = true
    }
    return user;
  }


  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged
  }
}
