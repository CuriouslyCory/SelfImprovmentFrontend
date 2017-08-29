import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import * as moment from 'moment';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs';

import { Goals } from 'api/collections/goals.collection';
import { Tallies } from 'api/collections/tallies.collection';

import { GoalSettingsDialog } from '../../dialogs/goal-settings/goal-settings.dialog';

import { Goal } from 'api/models/goal';
 
@Component({
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit{
  
  goals: any;
  
  constructor( private modalCtrl: ModalController ) {
    
  }
  
  ngOnInit() {
    MeteorObservable.subscribe('goals').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.goals = this.findGoals();
      });
    });
  }
  
  findGoals(): Observable<Goal[]> {
    return Goals.find().map(goals => {
      return goals;
    });
  }
  
  openGoalSettings (): void {
    let modal = this.modalCtrl.create(GoalSettingsDialog, { 'goal': null });
    modal.present();
  }
 
 
}