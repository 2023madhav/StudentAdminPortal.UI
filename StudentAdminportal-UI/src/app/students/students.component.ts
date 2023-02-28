import { Component, OnInit } from '@angular/core';
import { StudentUi } from '../models/ui-models/student-ui.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentui:StudentUi[]=[];
  constructor(private studentservice:StudentService){

  }
  ngOnInit(): void {
    //Fetchstudent student
    this.studentservice.getStudents().subscribe(
      (successResponse) => {
       this.studentui=successResponse;
       },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
