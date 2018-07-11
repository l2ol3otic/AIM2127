import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {
        this.http
            .get('http://localhost:8081/test')
            .subscribe(res => console.log(res))
    }
}