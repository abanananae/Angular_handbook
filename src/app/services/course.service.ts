import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private basedUrl: string = "http://localhost:3100/course"

  constructor(private _httpClient: HttpClient) { }

  getCourse(){
    return this._httpClient.get(this.basedUrl).pipe(
  ((d)=>{ 
        console.log(d);
        return d;
      })
    );
  }
}
