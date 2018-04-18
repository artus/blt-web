import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BltService } from '../blt.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  protocolInput = "";
  hostInput = "";
  portInput = "";

  webSocketUrlInput = "ws://localhost:9985/api/v1/streams/valid_transactions";

  constructor(public bltService: BltService, public router: Router) { }

  ngOnInit() {
  }

  onSaveSettingsClicked() {
    console.log("Saving settings...");
    this.bltService.loadBlt(this.protocolInput, this.hostInput, this.portInput);
    this.router.navigate(['/overview']);
  }

  onWsUrlClicked() {
    console.log("Creating new connection for WebSockets...")
    this.bltService.initializeWebSocketConnection(this.webSocketUrlInput);
  }


}
