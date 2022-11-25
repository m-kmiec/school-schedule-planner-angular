import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/Course";
import { StudentGroup } from "../models/studentsGroup";


@Injectable()
export class Service {

    private static url: string = "http://localhost:3000"
    private static http: HttpClient;

    constructor() {}

    static getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url + "/courses");
    }

    static getStudentGroups(): Observable<StudentGroup[]> {
        return this.http.get<StudentGroup[]>(this.url + "/studentGroups"); 
    }
    static addCourse(data: any) {
        return this.http.post<any>(this.url + "/courses",data);
    }

    static editCourse(data: any, id:number){
        return this.http.put<any>(this.url + "/courses/"+id,data);
    }

    static deleteCourse(id: number){
        return this.http.delete<any>(this.url + "/courses/"+id);
    }
}