// angular 2 components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdDatepickerModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
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
import { HomeComponent } from './home/home.component';

// import routing
import { AppRoutingModule } from './app-routing.module';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    SettingsComponent,
    NotFoundComponent,
    GoalTrackerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdToolbarModule,
    MdSidenavModule,
    MdGridListModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
