import { Injectable } from "../../../../node_modules/@angular/core";
import { Ilogin } from "../../components/login/login.interface";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../../services/http.service";

@Injectable()
export class AccountService {
    constructor(
        private http:HttpService
    ){

    }
    onLogin(model: Ilogin){
        return new Promise((resolve,reject) => {
            resolve(model);
            //reject({Message:'Error2'})
        })
    }
}