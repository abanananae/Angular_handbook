import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private basedUrl: string = "http://localhost:3100/search?"

  constructor(private _httpClient: HttpClient) { }

  getallCourse(course1:string){

    const response = new Promise(resolve => {
      this._httpClient.get(this.basedUrl+`name=${course1}`).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
    return response;
  }
}