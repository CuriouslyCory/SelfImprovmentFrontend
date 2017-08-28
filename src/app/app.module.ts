import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './pages/home/home.page';

import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';
import { GoalTrackerOptionMenu } from './components/goal-tracker/goal-tracker.option.menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoalTrackerComponent,
    GoalTrackerOptionMenu
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoalTrackerOptionMenu
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
