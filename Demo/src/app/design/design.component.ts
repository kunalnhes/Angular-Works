import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  namevar = 'Kunal';
  flag = false;

  abc() {
    this.flag = true;
  }

  leave() {
    this.flag = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
