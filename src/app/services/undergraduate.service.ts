import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnderGraduate {

  private basedUrl: string = "http://localhost:3100/undergraduate"

  constructor(private _httpClient: HttpClient) { }

  getCourse(){
    return this._httpClient.get(this.basedUrl);
  }
}