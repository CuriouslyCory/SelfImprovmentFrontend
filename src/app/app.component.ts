import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import pages
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';

// import services
import { PhoneService } from './services/phone.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen, 
    private phoneService: PhoneService
  ) {
    this.rootPage = Meteor.user() ? HomePage : LoginPage;
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova')) {
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
  
  logout (): void {
    this.phoneService.logout();
    this.rootPage = LoginPage;
  }
}

