import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { AlertService } from "../shareds/services/alert.service";


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    

    constructor(private http: HttpClient, private alert: AlertService, ) {
        this.http
            .get('http://localhost:8081/test')
            .subscribe(res => console.log(res))
    }

    private address: string = 'http://localhost:5008/api';
    loggedIn = new BehaviorSubject<boolean>(false);
    token;
   

    //Post everything
    requestPost(url: string , body: any) {

        console.log('Body',body)
         return this.http.post(`${this.address}${url}`, {
             email: body.username,
             password: body.password
         }).subscribe((resp: any) => {
            this.loggedIn.next(true);
            //this.token = resp.token;
            this.saveToken(resp.token, body.username);
            this.alert.notify(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
        }, (errorResp) => {
            this.loggedIn.next(undefined);
            errorResp.error ? this.alert.notify(errorResp.error.errorMessage) : this.alert.notify('An unknown error has occured.');
        });

    }
    //Get everything
    requestGet(url: string) {
        //return this.http.get('${this.address}${url}')
    }
    AuthenticationLogin(email: string, password: string) {

        this.http.post(this.address + '/login', {
            email: email,
            password: password
        }).subscribe((resp: any) => {
            this.loggedIn.next(true);
            //this.token = resp.token;
            this.saveToken(resp.token, email);
            this.alert.notify(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
        }, (errorResp) => {
            this.loggedIn.next(undefined);
            errorResp.error ? this.alert.notify(errorResp.error.errorMessage) : this.alert.notify('An unknown error has occured.');
        });

    }
    getToken(): string {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: string, user: string) {
        window.localStorage[user] = token;
        console.log('TokenStorage',localStorage[user]);   
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }

    buildHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (this.getToken()) {
            headersConfig['Authorization'] = `Token ${this.getToken()}`;
        }
        return new HttpHeaders(headersConfig);
    }


}