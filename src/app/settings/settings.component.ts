import { Component, OnInit } from '@angular/core';
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

  webSocketUrlInput = "";

  constructor(public bltService : BltService) { }

  ngOnInit() {
  }

  onSaveSettingsClicked()
  {
    console.log("Saving settings...");
    this.bltService.loadBlt(this.protocolInput, this.hostInput, this.portInput);
  }

  onWsUrlClicked()
  {
    console.log("Creating new connection for WebSockets...")
    this.bltService.initializeWebSocketConnection(this.webSocketUrlInput);
  }


}
