import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';
import { SettingsComponent } from '../settings/settings.component';
import { ExplorerComponent } from '../explorer/explorer.component';

const routes = [
  { path: "overview", component: OverviewComponent },
  { path: "settings", component: SettingsComponent},
  { path: "explorer", component: ExplorerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
