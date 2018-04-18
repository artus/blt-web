import { Injectable } from '@angular/core';
import { Blt, NodeInformation } from 'bltjs';
import { GlobalsService } from './globals.service';

@Injectable()
export class BltService {

  public blt: Blt = new Blt("http", "localhost", "9984");

  nodeInfo: NodeInformation;
  transactionStream: Array<any> = new Array();
  transactionWebSocket: WebSocket;

  assetSearchResulsts: Array<any> = new Array();
  transactionsForAsset: Array<any> = new Array();

  constructor(public globals: GlobalsService) {
    this.loadBlt("http", "localhost", "9984");
  }

  loadBlt(protocol, host, port) {

    this.globals.isLoading = true;

    try {
      this.blt = new Blt(protocol, host, port);

      this.blt.getNodeInformation().then(response => {

        this.nodeInfo = response;
        this.initializeWebSocketConnection(this.nodeInfo.apiInfo.streams);

        this.globals.isLoading = false;
      }).catch(error => this.globals.errorThrown(error));
    }
    catch (error) {
      this.globals.errorThrown(error);
    }
    this.globals.isLoading = false;
  }

  initializeWebSocketConnection(url: string) {
    this.transactionWebSocket = new WebSocket(url);
    this.transactionWebSocket.onmessage = event => {
      this.transactionStream.unshift({
        timestamp: new Date(),
        transaction: event.data
      });
    }
  }

}
