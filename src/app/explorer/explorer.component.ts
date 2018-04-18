import { Component, OnInit } from '@angular/core';
import { BltService } from '../blt.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  constructor(public bltService : BltService) { }

  JSON = JSON;

  searchInput: string = "";

  assets = new Array();
  transactions = new Array();
  transaction: any;

  onSearchInputChange = _.debounce(this.searchAssets, 500);

  ngOnInit() {
  }

  clearSearchResults() {
    this.assets = new Array();
    this.transactions = new Array();
    this.transaction = null;
  }

  async searchAssets() {
    if (this.searchInput == "") this.clearSearchResults();
    else {
      console.log("Querying assets.");
      this.assets = await this.bltService.blt.connection.searchAssets(this.searchInput);
    }
  }

  async loadTransactions(assetId) {
    this.transactions = await this.bltService.blt.connection.listTransactions(assetId);
  }

}
