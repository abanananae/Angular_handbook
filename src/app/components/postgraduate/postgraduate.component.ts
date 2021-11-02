import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { PostService } from 'src/app/services/postgraduate.service';


@Component({
  selector: 'app-postgraduate',
  templateUrl: './postgraduate.component.html',
  styleUrls: ['./postgraduate.component.scss']
})
export class PostgraduateComponent implements OnInit {

  p: number = 1;

  public courses: any = [];

  constructor(private _postServices: PostService) { }

  ngOnInit(): void {
    this._postServices.getCourse().subscribe(courses =>{
      this.courses = courses;
    })
  }

}