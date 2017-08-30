import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import * as moment from 'moment';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs';

import { GoalService } from '../../services/goal.service';
import { GoalSettingsDialog } from '../../dialogs/goal-settings/goal-settings.dialog';
import { Goal } from 'api/models/goal';
 
@Component({
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit{
  
  goals: Observable<Goal[]>;
  
  constructor( 
    private modalCtrl: ModalController,
    private goalService: GoalService 
  ) { }
  
  ngOnInit() {
    MeteorObservable.autorun().subscribe(() => {
      this.goals = this.goalService.findGoals();
    });
  }
  
  openGoalSettings (): void {
    let modal = this.modalCtrl.create(GoalSettingsDialog, { 'goal': null });
    modal.present();
  }
 
 
}