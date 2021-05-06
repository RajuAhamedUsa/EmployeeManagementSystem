import { Component, OnInit } from '@angular/core';
import {EmpServiceService} from "../../service/emp-service.service";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  emp :Employee[]= [];
  query: any = '';
  editingEmp: any;
  activateAddEditCom: boolean;
  modelTitle: any;
  constructor(private ser : EmpServiceService) { }

  ngOnInit(): void {

    this.ser.getAll().subscribe((data:any)=>{
      this.emp=data;
    })
  }

  closeModel() {
    this.activateAddEditCom=false;
    this.editingEmp=null;
     this.ngOnInit();

  }

  editEmp(e: any) {
    this.modelTitle="Edit Employee"
    this.activateAddEditCom=true;
    this.editingEmp=e;

  }

  deleteEmp(_id: any) {

    confirm("Do you want to delete this emp");
    this.ser.deleteEmp(_id).subscribe((item)=>{
      console.log(item);
      this.ngOnInit();
    });

  }

  addEmp() {
    this.modelTitle="Add Employee "
    this.activateAddEditCom=true;
    this.editingEmp ={
       _id :0,
    }

  }
}
