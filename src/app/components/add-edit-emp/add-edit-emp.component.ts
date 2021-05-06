import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmpServiceService} from '../../service/emp-service.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  Id:string;
  Name: string;
  DateOfBirth: string;
  Location: string;
  Salary: number;
  DepartmentId: number;
  PhoneNumber: number;

  @Input('emp') currentEmp;
  addEditButtonName: any;
    constructor(private ser: EmpServiceService) { }

  ngOnInit(): void {

      console.log("Curent emp is " + this.currentEmp.Name);
        if(this.currentEmp._id!=0) {
          this.addEditButtonName="Edit Employee"
          this.Id = this.currentEmp._id;
          this.Name = this.currentEmp.Name;
          this.DateOfBirth = this.currentEmp.DateOfBirth;
          this.Location = this.currentEmp.Location;
          this.Salary = this.currentEmp.Salary;
          this.DepartmentId = this.currentEmp.DepartmentId;
          this.PhoneNumber = this.currentEmp.PhoneNumber;
        }
        else {
          this.addEditButtonName="Add Employee"
        }

  }

  AddEmp() {

      if(this.currentEmp._id!=0)
      {

         alert("edit emp id is " + this.currentEmp._id);
         this.currentEmp.Name=this.Name;
         this.currentEmp.DateOfBirth=this.DateOfBirth;
         this.currentEmp.Salary=this.Salary;
         this.currentEmp.Location=this.Location;
         this.currentEmp.DepartmentId=this.DepartmentId;
         this.currentEmp.PhoneNumber= this.PhoneNumber;

         this.ser.editEmp(this.currentEmp).subscribe();

      }

      else {
                const emp: Employee = new Employee(this.Name, this.DateOfBirth, this.Location, this.Salary, this.DepartmentId, this.PhoneNumber);
        this.ser.addEmp(emp).subscribe();

        this.Name = '';
        this.DateOfBirth = '';
        this.Location = '';
        this.Salary = null;
        this.DepartmentId = null;
        this.PhoneNumber = null;
      }

  }
}
