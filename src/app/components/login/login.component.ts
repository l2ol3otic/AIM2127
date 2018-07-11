import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { IloginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../shareds/services/alert.service';
import { AccountService } from '../../shareds/services/account.service';

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
    private account: AccountService
  ) {
    this.initialCreateFormData();
   }
  Url = AppURL;
  form: FormGroup
  //ขเ้าสู่ระบบ
  onSubmit(): void {
    console.log(this.form.value);
    if(this.form.invalid){
      console.log("error")
      return this.alert.notify("ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง !!")
      
    }else{
      this.account
      .onLogin(this.form.value)
      .then(res => console.log(res))
      .catch(err => this.alert.notify(err.Message))
      this.router.navigate(['/', AppURL.Authen])
    }
    
  }
  // LOAD FORM LOGIN
  private initialCreateFormData(){
    this.form = this.builder.group({
      username: ['',Validators.required],
      password: [],
      remember: []
    });
  }

}
