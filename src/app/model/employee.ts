



export class Employee {
     _id:string;
     Name: string;
     DateOfBirth:string;
     Location:string;
     Salary:number;
     DepartmentId:number;
     PhoneNumber:number;
   constructor(n:string,dob:string,loc:string,s:number,deptId:number,phoneNum:number) {
   this.Name=n;
   this.DateOfBirth=dob;
   this.Location=loc;
   this.Salary=s;
   this.DepartmentId=deptId;
   this.PhoneNumber=phoneNum;


   }
}
