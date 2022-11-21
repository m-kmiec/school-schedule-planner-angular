import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/Course";

@Injectable()
export class CoursesService {

    private url: string = "http://localhost:3000"

    constructor(private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.url + "/courses");
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