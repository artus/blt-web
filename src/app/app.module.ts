import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BltService } from './blt.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { GlobalsService } from './globals.service';
import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SettingsComponent,
    ExplorerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    BltService,
    GlobalsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
