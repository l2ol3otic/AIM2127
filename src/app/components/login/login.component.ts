import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { IloginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../shareds/services/alert.service';
import { AccountService,IAccount } from '../../shareds/services/account.service';
import { AuthenService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements IloginComponent {
  constructor(
    private builder:FormBuilder,
    private router: Router,
    private alert: AlertService,
    private authen: AuthenService,
    private account: AccountService
  ) {
    this.initialCreateFormData();
    this.authen.clearAuthenticated();
   }
  
  Url = AppURL;
  form: FormGroup
  //ขเ้าสู่ระบบ
  onSubmit(): void {
    if(this.form.invalid){
      console.log("error")
      return this.alert.notify("ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง !!")
      
    }else{
      
      var simpleuser :any
      this.account
      .onLogin(this.form.value)
      .then(res => {
        simpleuser = res.user
        console.log('UserloginTest',simpleuser.user_id)
        // เก็บ session
        this.authen.setAuthenticated(res.accessToken);
        // alert และ redirect หน้า page
        this.alert.notify('สวัสดีคุณ  ' + simpleuser.user_id , 'info');
        ///this.router.navigateByUrl(this.returnURL);
        this.router.navigate(['/', AppURL.Authen])
      
    })
      .catch(err => this.alert.notify(err.Message))
    }
    
  }
  // LOAD FORM LOGIN
  private initialCreateFormData(){
    this.form = this.builder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      remember: []
    });
  }

}
