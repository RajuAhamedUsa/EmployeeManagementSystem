import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmp'
})
export class SearchEmpPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((emp)=>{
      return emp.Name.toUpperCase().indexOf(args[0].toUpperCase()) > -1;

    });
  }

}
