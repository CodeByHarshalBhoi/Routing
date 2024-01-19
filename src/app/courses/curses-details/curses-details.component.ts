import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-curses-details',
  templateUrl: './curses-details.component.html',
  styleUrls: ['./curses-details.component.css']
})
export class CursesDetailsComponent implements OnInit, OnDestroy{
  selectedCourse!:Course;
  coureId!:number;
  hidePrevBtn  : boolean = false;
  hideNextBtn: boolean = false;

paramMapOb;
  constructor(private courseService:CourseService,private activatedRoute:ActivatedRoute){}


  ngOnInit(){


//WITH THE HELP OF THIS METHOD WE CAN NOT GET UPDATED VALUE BCZ NngOnOnit LOAD ONLY ONCE

        // NEW METHOD
//  this.coureId = +this.activatedRoute.snapshot.paramMap.get('id');

//  OLD METHOD
//  this.coureId = this.activatedRoute.snapshot.params['id'];



//WE CREATE OBSERVABLE FOR GET UPDATED VALUE
//METHOD-1 WITH PARAMS
// this.activatedRoute.params.subscribe((data)=>{
//  this.coureId = +data['id'];
//  this.selectedCourse = this.courseService.courses.find((course)=>course.id == this.coureId)
// });

//METHOD-2 WITH PARAMSMAP
this.paramMapOb = this.activatedRoute.paramMap.subscribe((data)=>{
        this.coureId = +data.get('id');
        this.selectedCourse = this.courseService.courses.find((course)=>course.id == this.coureId)
        if (this.selectedCourse.id ==1){
          this.hidePrevBtn = true
        }else{
          this.hidePrevBtn = false;
        }


        if (this.selectedCourse.id ==8){
          this.hideNextBtn = true
        }else{
          this.hideNextBtn = false;
        }
});



 console.log(this.coureId);

//  this.selectedCourse = this.courseService.courses.find((course)=>course.id == this.coureId)
  }

  ngOnDestroy(): void {
  this.paramMapOb.unsubscribe();
  }
}
