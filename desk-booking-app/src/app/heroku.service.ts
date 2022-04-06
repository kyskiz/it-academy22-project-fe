import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  constructor(private http: HttpClient ) { }

  getTestingWord() {
    return this.http.get('http://localhost:8080/api/v1/test', {responseType: "text"})
  }
}
