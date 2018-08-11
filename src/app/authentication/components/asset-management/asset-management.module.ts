import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetprocessComponent } from './assetprocess/assetprocess.component';
import { AsseteditComponent } from './assetedit/assetedit.component';
import { SharedsModule } from '../../../shareds/shareds.module';
import { Assetservice } from '../services/assets.service';

@NgModule({
  imports: [
    CommonModule,
    SharedsModule,
  ],
  declarations: [AssetlistComponent, AssetprocessComponent, AsseteditComponent],
  providers:[Assetservice]
})
export class AssetManagementModule { }
