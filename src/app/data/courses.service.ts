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
}