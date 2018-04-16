import { Component, OnInit } from '@angular/core';
import { BltService } from '../blt.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public bltService : BltService) { }

  ngOnInit() {
  }

}
