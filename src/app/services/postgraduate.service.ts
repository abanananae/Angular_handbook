import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private basedUrl: string = "http://localhost:3100/postgraduate"

  constructor(private _httpClient: HttpClient) { }

  getCourse(){
    return this._httpClient.get(this.basedUrl);
  }
}