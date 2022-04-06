import { Component, OnInit } from '@angular/core';
import {HerokuService} from "../heroku.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-testing-heroku',
  templateUrl: './testing-heroku.component.html',
  styleUrls: ['./testing-heroku.component.css']
})
export class TestingHerokuComponent implements OnInit {

  isWorking!: Observable<string>;

  constructor(private service: HerokuService) { }

  ngOnInit(): void {
    this.isWorking = this.service.getTestingWord();
  }

}
