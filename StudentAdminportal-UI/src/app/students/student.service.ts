import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl='https://localhost:44377';
  constructor(private httpclient:HttpClient)
  {

  }
  getStudent():Observable<any>{
   return this.httpclient.get<any>(this.baseApiUrl+'/Students');
  }
  getStudents(): Observable<Student[]> {
    return this.httpclient
      .get<Student[]>(this.baseApiUrl + '/Students');
  }
}
