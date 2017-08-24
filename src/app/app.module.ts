// angular 2 components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdDatepickerModule,
  MdDialogModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSelectModule,
  MdSidenavModule,
  MdToolbarModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

import { CovalentLayoutModule, CovalentMenuModule, CovalentNotificationsModule } from '@covalent/core';

// hammer is required by some angular components
import 'hammerjs';

// import app components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

// import routing
import { AppRoutingModule } from './app-routing.module';
import { StatsComponent } from './views/stats/stats.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

// import custom common components
import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';
import { GoalSettingsComponent } from './views/goal-settings/goal-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    SettingsComponent,
    NotFoundComponent,
    GoalTrackerComponent,
    GoalSettingsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdToolbarModule,
    MdSelectModule,
    MdSidenavModule,
    MdGridListModule,
    MdTabsModule
  ],
  entryComponents: [
    GoalSettingsComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
