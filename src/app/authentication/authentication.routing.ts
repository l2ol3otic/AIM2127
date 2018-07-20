import { Routes,RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/MenuComponent/setting/setting.component';
import { ProfileComponent } from './components/MenuComponent/profile/profile.component';
import { AssetlistComponent } from './components/asset-management/assetlist/assetlist.component';

const RouteLists:Routes = [
    {path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full'},
    {path: AuthURL.Dashboard, component:DashboardComponent},
    {path: AuthURL.Setting, component:SettingComponent},
    {path: AuthURL.Profile, component:ProfileComponent},
    {path: AuthURL.AssetList, component:AssetlistComponent}
  
];
export const AuthRouting = RouterModule.forChild(RouteLists);