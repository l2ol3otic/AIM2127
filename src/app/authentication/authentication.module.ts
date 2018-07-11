import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/MenuComponent/setting/setting.component';
import { ProfileComponent } from './components/MenuComponent/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedsModule
  ],
  declarations: [DashboardComponent, SettingComponent, ProfileComponent]
})
export class AuthenticationModule { }
