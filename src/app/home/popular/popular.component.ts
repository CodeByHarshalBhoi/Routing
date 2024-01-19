import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  popularCourses: Course[] = [];

  constructor(private courseService:CourseService, private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCources(){
    // METHOD-1
this.router.navigate(['courses']);

//METHOD-2
// this.router.navigate(['courses'], {relativeTo:this.activatedRoute});

//METHOD-3
// this.router.navigateByUrl('courses');
  }
}
