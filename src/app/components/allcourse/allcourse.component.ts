import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-allcourse',
  templateUrl: './allcourse.component.html',
  styleUrls: ['./allcourse.component.scss']
})
export class AllcourseComponent implements OnInit {

  p: number = 1;

  public courses: any = [];

  constructor(private _courseServices: CourseService) { }

  ngOnInit(): void {
    this._courseServices.getCourse().subscribe(courses =>{
      this.courses = courses;
    })
  }

}
