import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursesDetailsComponent } from './courses/curses-details/curses-details.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivate } from './auth.gaurd';
import { AuthgaurdService } from './services/authgaurd.service';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'courses', component:CoursesComponent},
  // {path:'courses/course/:id', component:CursesDetailsComponent},
    {path:'courses', canActivateChild:[AuthgaurdService],children:[
    {path:'course/:id' , component:CursesDetailsComponent},

    //THIS METHOD USE FOR ANGULAR 14 AND BELOW VERSION..
    // {path:'checkout', component:CheckoutComponent, canActivate:[AuthgaurdService] }

    //THIS METHOD IS USE FOR ANGULAR 15 AND ABOVE VERSION
    {path:'checkout', component:CheckoutComponent ,   }
  ]},
  {path:'login', component: LoginComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
