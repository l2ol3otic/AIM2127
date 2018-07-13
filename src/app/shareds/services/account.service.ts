import { Injectable } from "../../../../node_modules/@angular/core";
import { Ilogin } from "../../components/login/login.interface";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../../services/http.service";

@Injectable()
export class AccountService {

    public y:any

    constructor(
        private http:HttpService
        
    ){

    }
    onLogin(model: Ilogin){
        //return this.http.AuthenticationLogin(model.username,model.password)
        //  return new Promise((resolve,reject) => {
        //   resolve(model);
        //     //reject({Message:'Error2'})
        //  })

        console.log(model)
        //return this.http.requestPost('/login',model).toPromise() as Promise<{accessToken: string}>
        return this.http.requestPost('/login',model)
    }
}