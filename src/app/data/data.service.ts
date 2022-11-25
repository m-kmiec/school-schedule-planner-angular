import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/Course";
import { StudentGroup } from "../models/studentsGroup";
import { Subject } from "../models/Subject";
import { Teacher } from "../models/Teacher";


@Injectable()
export class Service {

    private url: string = "http://localhost:3000"

    constructor(  private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url + "/courses");
    }

    getSubjects(): Observable<Subject[]> {
        return this.http.get<Subject[]>(this.url + "/subjects");
    }

    getTeachers(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(this.url + "/teachers");
    }

    getStudentGroups(): Observable<StudentGroup[]> {
        return this.http.get<StudentGroup[]>(this.url + "/studentGroups"); 
    }
    addCourse(data: any) {
        return this.http.post<any>(this.url + "/courses",data);
    }

    editCourse(data: any, id:number){
        return this.http.put<any>(this.url + "/courses/"+id,data);
    }

    deleteCourse(id: number){
        return this.http.delete<any>(this.url + "/courses/"+id);
    }

}