import { Component } from '@angular/core';
import { BltService } from './blt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BigchainDB Load Tester';

  constructor(public bltService : BltService) {

  }
}
