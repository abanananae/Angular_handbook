import { Component, OnInit } from '@angular/core';
import {UnderGraduate} from 'src/app/services/undergraduate.service'

@Component({
  selector: 'app-undergraduate',
  templateUrl: './undergraduate.component.html',
  styleUrls: ['./undergraduate.component.scss']
})
export class UndergraduateComponent implements OnInit {

  p: number = 1;
  public courses: any = [];

  constructor(private _UnderGraduate: UnderGraduate) { }

  ngOnInit(): void {
    this._UnderGraduate.getCourse().subscribe(courses =>{
      this.courses = courses;
    })
  }

}
