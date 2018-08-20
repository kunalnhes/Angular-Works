import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: `./employee-list.component.html`
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  users$: Object;

  constructor(private abc: EmployeeService) {}

  ngOnInit() {
    this.abc.getEmployees().subscribe(
      data => this.users$ = data
    );
  }
}
