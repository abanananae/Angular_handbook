import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { PipeTransform, Pipe } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnInit {
  term: any;
  course$: any;
  data: any;

  private subjectKeyUp = new Subject<any>();
  
  constructor(private _courseServices: CourseService, private search:SearchService) { }

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(200),distinctUntilChanged())
    .subscribe((d) =>{this.getCourse(d)
    });
  }
  onSearch($event:any) {
    const value = $event.target.value;
    this.subjectKeyUp.next(value)
    console.log(value);
  }
  getCourse(value:string ) {
    this.course$=this._courseServices.getCourse();
  }
  
  getSearch(name: any){
    const keyword = name.target.value;
    const search = this.search.getallCourse(keyword).then(response =>{
      this.data = response;
      console.log(this.data)
    });
 }


  
}
