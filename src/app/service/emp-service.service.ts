import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {


  URL: string = 'http://localhost:5000/emp';
  constructor(private httpClient: HttpClient) { }


  addEmp(emp: Employee)
  {
    return this.httpClient.post(this.URL+"/add", emp);
  }

  getAll() :Observable<Employee>{
    return this.httpClient.get<Employee>(this.URL+"/getAll");
  }

  editEmp(emp :Employee){

    return this.httpClient.put(this.URL+"/editEmp",emp);
  }

  deleteEmp(id: any)
  {
    return  this.httpClient.delete(this.URL+"/deleteById/"+id);
  }

}
