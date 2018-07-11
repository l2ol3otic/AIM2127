import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetprocessComponent } from './assetprocess/assetprocess.component';
import { AsseteditComponent } from './assetedit/assetedit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssetlistComponent, AssetprocessComponent, AsseteditComponent]
})
export class AssetManagementModule { }
