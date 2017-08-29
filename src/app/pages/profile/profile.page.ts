import { Component, OnInit } from '@angular/core';
import { Profile } from 'api/models/profile';
import { NavController, AlertController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.page.html'
})
export class ProfilePage {
  picture: string;
  profile: Profile;
  
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit (): void {
    this.profile = Meteor.user().profile || {
      name: ''
    };
  }
  
  updateProfile (): void {
    MeteorObservable.call('updateProfile', this.profile).subscribe({
      next: () => {
        this.navCtrl.setRoot(HomePage);
      },
      error: ( e: Error ) => {
        this.handleError(e);
      }
    });
  }
  
  handleError (e: Error) {
    console.error(e);
    
    const alert = this.alertCtrl.create({
      title: "Oops!",
      message: e.message,
      buttons: ['Ok']
    });
    
    alert.present();
  }
}
