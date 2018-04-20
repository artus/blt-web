import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BltService } from '../blt.service';

import * as $ from 'jquery';

// This is a dirty hack but is required to include the knob jquery plugin.
declare function require(name:string);
require("../../assets/js/jquery.knob.min.js");

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  public $ = $;

  constructor(public bltService: BltService) { }

  testIdPlaceholder = "test-" + new Date().toISOString();
  testIdInput = "";

  amountInput = 100;
  typeInput = "create";

  static currentTestMax = 0;
  currentTestIndex = 0;

  successRate = 0;
  errorRate = 0;
  static progressRate = 0;

  testResult;

  someValue = 0;

  ngAfterViewInit() {

    $(".dial").knob({
      'fgColor': 'teal',
      'angleOffset': - 125,
      'angleArc': 250
    });
  }

  ngOnInit() {
    this.updateDials();
  }

  updateDials() {

    if (this.someValue == 100) this.someValue = 0;
    else this.someValue++;

    console.log("updating " + this.someValue);

    $(".dial").trigger("change");

    /*$('#dial').trigger("change");
    $('#progressDial').trigger("change");
    $('#successDial').trigger("change");*/

    setTimeout(() => this.updateDials(), 1000);

  }

  onTestFormButtonClick() {
    this.startNewTest();
  }

  async startNewTest() {

    TestComponent.currentTestMax = this.amountInput;

    if (this.typeInput == "create") {
      console.log("Starting new create-transaction test...")
      this.testResult = await this.bltService.blt.testCreateTransactions(this.testIdInput, this.amountInput, this.updateGraphs);
    }
    else {
      console.log("Starting new transfer-transaction test...")
      this.testResult = await this.bltService.blt.testTransferTransactions(this.testIdInput, this.amountInput, this.updateGraphs);
    }

  }

  getCurrentProgress(): number {
    return TestComponent.progressRate;
  }

  static getPercentage(current, max) {
    return current / max * 100;
  }

  updateGraphs(testId, tx, res, index) {
    console.log(testId + " - " + index)
    TestComponent.progressRate = TestComponent.getPercentage(index + 1, TestComponent.currentTestMax);
    console.log(TestComponent.progressRate);
  }

  setValue() {

  }

}
