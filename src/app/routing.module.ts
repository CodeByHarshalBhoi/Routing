import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursesDetailsComponent } from './courses/curses-details/curses-details.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'courses', component:CoursesComponent},
  // {path:'courses/course/:id', component:CursesDetailsComponent},
  {path:'courses', children:[
    {path:'course/:id' , component:CursesDetailsComponent}
  ]},
  {path:'**', component:NotFoundComponent}
];
@NgModule({
  imports:[
    RoutingModule
  ],
})

export class RoutingModule{

}
