import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { IloginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements IloginComponent {
  constructor(
    private builder:FormBuilder,
    private router: Router
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
    }else{
      this.router.navigate(['/', AppURL.Authen])
    }
    
  }
  private initialCreateFormData(){

    this.form = this.builder.group({
      username: ['',Validators.required],
      password: [],
      remember: []
    });
  }

}
