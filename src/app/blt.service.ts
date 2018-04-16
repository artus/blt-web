import { Injectable } from '@angular/core';
import { Blt, NodeInformation } from 'bltjs';

@Injectable()
export class BltService {

  public blt: Blt = new Blt("https", "test.bigchaindb.com");

  nodeInfo: NodeInformation;
  transactionStream: Array<any> = new Array();
  transactionWebSocket: WebSocket;

  constructor() {
    this.loadBlt("https", "test.bigchaindb.com", "443");
  }

  loadBlt(protocol, host, port) {

    this.blt = new Blt(protocol, host, port);

    this.blt.getNodeInformation().then(response => {

      this.nodeInfo = response;
      this.initializeWebSocketConnection(this.nodeInfo.apiInfo.streams);
    });
  }

  initializeWebSocketConnection(url : string)
  {
    this.transactionWebSocket = new WebSocket(url);
    this.transactionWebSocket.onmessage = event => {
      this.transactionStream.push(event.data);
    }
  }

}
