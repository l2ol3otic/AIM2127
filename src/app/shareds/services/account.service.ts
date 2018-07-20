import { Injectable } from "../../../../node_modules/@angular/core";
import { Ilogin } from "../../components/login/login.interface";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../../services/http.service";

@Injectable()
export class AccountService {

    public y: any

    constructor(
        private http: HttpService

    ) { }
    public UserLogin: IAccount = {} as any;
    public setUserLogin(userLogin: IAccount) {
        this.UserLogin.user_id = userLogin.user_id;
        this.UserLogin.username = userLogin.username;
        this.UserLogin.fullname = userLogin.fullname;
        this.UserLogin.department = userLogin.department;
        this.UserLogin.status = userLogin.status;
        this.UserLogin.created = userLogin.created;
        this.UserLogin.endate = userLogin.endate;
        this.UserLogin.role = userLogin.role;
        return this.UserLogin;    
    }

    //เข้าสู้ระบบและรับ token
    onLogin(model: Ilogin) {
        return this.http
            .requestPost('/login', model)
            .toPromise() as Promise<{ accessToken: string; user: string }>
            
    }
    getUserLogin(accessToken: string) {
        return (this.http
            .requestGet('/getUserVerify', accessToken)
            .toPromise() as Promise<IAccount>)
            .then(userLogin => this.setUserLogin(userLogin));
    }
    
}
export interface IAccount {
    user_id: string;
    username: string;
    fullname: string;
    department: string;
    status: string;
    created?: Date;
    endate?: Date;
    role?: string
}
