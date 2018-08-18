import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: "Darius", age: 32 },
      { id: 2, name: "Liam", age: 22 },
      { id: 3, name: "Julian", age: 21 },
      { id: 4, name: "Tanz", age: 30 },
      { id: 5, name: "Cole", age: 22 }
    ];
  }
}
