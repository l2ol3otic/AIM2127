import { Component, OnInit } from '@angular/core';
import { AccountService, IAccount } from '../../../shareds/services/account.service';
import { FormBuilder } from '../../../../../node_modules/@angular/forms';
import { Router } from '../../../../../node_modules/@angular/router';
import { AlertService } from '../../../shareds/services/alert.service';
import { AuthenService } from '../../../services/auth.service';
import { AppURL } from '../../../app.url';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private account: AccountService,
    private builder:FormBuilder,
    private router: Router,
    private alert: AlertService,
    private authen: AuthenService,
  ) { 
    this.initialLoadUserLogin();
  }

  ngOnInit() {
    
  }
  UserLogin: IAccount;
  private initialLoadUserLogin() {
     return this.account
        .getUserLogin(this.authen.getAuthenticated())
        .then(UserLogin => { 
          this.UserLogin = UserLogin
          if(this.UserLogin.fullname){
            //this.alert.notify(this.UserLogin.fullname, 'info');
          }else{
            this.router.navigate(['/',AppURL.Login])
          }  
        })
        .catch(err => {
          this.alert.notify(err.Message)
          this.router.navigate(['/',AppURL.Login])
        }
        );
}
}
