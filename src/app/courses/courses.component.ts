import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  constructor(private coursesService:CourseService, private activatedRoute:ActivatedRoute){

  }


  AllCourses: Course[];
  searchString:string;




  ngOnInit(): void {
    // this.searchString=this.activatedRoute.snapshot.queryParams['search'];



    //CREATE OBSERVABLE FOR GET UPDATED VALUE.
    this.activatedRoute.queryParamMap.subscribe((data)=>{
      this.searchString = data.get('search');
      if(this.searchString === undefined || this.searchString ===''||this.searchString === null){
       this.coursesService.getAllcourses().subscribe((res)=>{
        this.AllCourses = res;
        });
      // this.AllCourses = this.activatedRoute.snapshot.data['courses']
      }else{
        this.AllCourses = this.coursesService.courses.filter(x=>
          x.title.toLowerCase().includes(this.searchString.toLowerCase())
        )
      }
    })

    //IT'S NOT PROVIDED UPDATED VALUE....
    // this.searchString=this.activatedRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    // if(this.searchString === undefined || this.searchString ===''||this.searchString === null){
    //   this.AllCourses = this.coursesService.courses;
    // }else{
    //   this.AllCourses = this.coursesService.courses.filter(x=>
    //     x.title.toLowerCase().includes(this.searchString.toLowerCase())
    //   )
    // }

  }
}
