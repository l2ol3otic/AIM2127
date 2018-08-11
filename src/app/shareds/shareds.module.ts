import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavbarComponent } from './Components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './Components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './Components/auth-content/auth-content.component';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    AuthNavbarComponent, 
    AuthSidebarComponent, 
    AuthContentComponent
  ],
  exports:[
    AuthNavbarComponent,
    AuthSidebarComponent,
    AuthContentComponent,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule
  ],
  providers: [
    AlertService,
    AccountService
  ]
  
})
export class SharedsModule { }
