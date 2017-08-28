import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

import { GoalSettingsDialog } from '../../dialogs/goal-settings/goal-settings.dialog';

import { Goal } from '../../models/goal';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Options</ion-list-header>
      <button ion-item color="danger" (click)="deleteGoal()">Delete</button>
      <button ion-item (click)="editGoal()">Settings</button>
      <button ion-item (click)="close()">Cancel</button>
    </ion-list>
  `
})
export class GoalTrackerOptionMenu {
  private goal: Goal;
  
  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, private params: NavParams) {}
  
  ngOnInit () { 
    this.goal = this.params.data.goal;
  }

  public editGoal () {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(GoalSettingsDialog, { 'goal': this.goal });
    modal.present();
  }
  
  public deleteGoal () {
    this.viewCtrl.dismiss();
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}