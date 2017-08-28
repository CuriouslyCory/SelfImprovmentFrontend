import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Options</ion-list-header>
      <button ion-item (click)="close()">Delete</button>
      <button ion-item (click)="close()">Settings</button>
      <button ion-item (click)="close()">Cancel</button>
    </ion-list>
  `
})
export class GoalTrackerOptionMenu {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}