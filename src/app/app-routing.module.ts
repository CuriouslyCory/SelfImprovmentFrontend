// angular 2 components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// route components
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { StatsComponent } from './views/stats/stats.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
