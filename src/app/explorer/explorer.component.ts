import { Component, OnInit } from '@angular/core';
import { BltService } from '../blt.service';
import * as _ from 'lodash';
import { query } from '@angular/core/src/animation/dsl';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  constructor(public bltService : BltService, public route : ActivatedRoute) { }

  JSON = JSON;

  searchInput: string = "";

  assets = new Array();
  transactions = new Array();
  transaction: any;

  onSearchInputChanged = _.debounce(this.onSearchInputChange, 500);

  ngOnInit() {
    this.loadPathVariables();
  }

  loadPathVariables() {
    let asset_id = this.route.snapshot.paramMap.get("asset_id");
    let transaction_id = this.route.snapshot.paramMap.get("transaction_id");

    if (asset_id != null) {
      this.searchAssets(asset_id);
      this.loadTransactions(asset_id);
    }

    if (transaction_id != null) {
      this.loadTransaction(transaction_id);
    }
  }

  clearSearchResults() {
    this.assets = new Array();
    this.transactions = new Array();
    this.transaction = null;
  }

  onSearchInputChange() {
    if (this.searchInput == "") this.clearSearchResults();
    else {
      console.log("Querying assets.");
      this.searchAssets(this.searchInput);
    }
  }

  async searchAssets(queryString) {
    this.assets = await this.bltService.blt.connection.searchAssets(queryString);
  }

  async loadTransactions(assetId) {
    this.transactions = await this.bltService.blt.connection.listTransactions(assetId);
  }

  async loadTransaction(transactionId) {
    this.transaction = await this.bltService.blt.connection.getTransaction(transactionId);
  }

}
