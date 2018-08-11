import { Component, OnInit } from '@angular/core';
import { Assetservice } from '../../services/assets.service';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrls: ['./assetlist.component.css']
})
export class AssetlistComponent implements OnInit {

  constructor(
    private assetservice:Assetservice
  ) { }

  ngOnInit() {
  }

}
