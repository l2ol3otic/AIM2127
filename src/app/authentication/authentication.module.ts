import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/MenuComponent/setting/setting.component';
import { ProfileComponent } from './components/MenuComponent/profile/profile.component';
import { AssetManagementModule } from './components/asset-management/asset-management.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedsModule,
    AssetManagementModule
  ],
  declarations: [DashboardComponent, SettingComponent, ProfileComponent]
})
export class AuthenticationModule { }
