import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('moment()', moment());
    console.log('moment().format()', moment().format());
    console.log('moment().format()', moment('20060601', 'YYYYMMDD').add(5, 'd').utc().format());
    console.log('moment().format()', moment().utc().format('YYYY-MM-DD HH:mm'));
    console.log('moment().format()', moment(new Date()).format());
    console.log('shuldu buldu', moment(moment('20060601', 'YYYYMMDD').add(5, 'd').utc().format()).format());

  }

}
