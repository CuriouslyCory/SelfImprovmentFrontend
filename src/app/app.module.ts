import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// import pages
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { VerificationPage } from './pages/verification/verification.page';

// import reusables
import { GoalTrackerComponent } from './components/goal-tracker/goal-tracker.component';
import { GoalTrackerOptionMenu } from './components/goal-tracker/goal-tracker.option.menu';
import { GoalSettingsDialog } from './dialogs/goal-settings/goal-settings.dialog';

// import services
import { GoalService } from './services/goal.service';
import { PhoneService } from './services/phone.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoalTrackerComponent,
    GoalTrackerOptionMenu,
    GoalSettingsDialog,
    LoginPage,
    ProfilePage,
    VerificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalTrackerOptionMenu,
    GoalSettingsDialog,
    HomePage,
    LoginPage,
    ProfilePage,
    VerificationPage
  ],
  providers: [
    GoalService,
    PhoneService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
