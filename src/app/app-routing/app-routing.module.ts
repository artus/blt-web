import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';
import { SettingsComponent } from '../settings/settings.component';
import { ExplorerComponent } from '../explorer/explorer.component';
import { TestComponent } from '../test/test.component';

const routes = [
  { path: '', redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: OverviewComponent },
  { path: "settings", component: SettingsComponent },
  { path: "explorer", component: ExplorerComponent },
  { path: "explorer/:asset_id/:transaction_id", component: ExplorerComponent },
  { path: "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
