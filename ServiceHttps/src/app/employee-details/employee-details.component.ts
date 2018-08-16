import { Component, OnInit } from "@angular/core";

@Component({
  selector: "employee-details",
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}},{{employee.name}},{{employee.age}}</li>
    </ul>
  `
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];

  constructor() {}

  ngOnInit() {}
}
