// import core libraries
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

// import collections
//import { Goals } from '../../../../../api/server/collections/goals.collection';

// import models
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-goal-settings',
  templateUrl: './goal-settings.dialog.html'
})
export class GoalSettingsDialog implements OnInit {
  
  public currentlySaving: boolean;
  private originalGoal: Goal;
  public goal: Goal;

  constructor( private params: NavParams, public viewCtrl: ViewController ) { }

  ngOnInit() {
    
    this.originalGoal = this.params.get('goal');
    this.goal = new Goal();
    if ( this.originalGoal ) {
      // clone the current settings in case we want to cancel
      this.goal = new Goal();
      this.goal._id = this.originalGoal._id;
      this.goal.title = this.originalGoal.title;
      this.goal.target = this.originalGoal.target;
      this.goal.progress = this.originalGoal.progress;
      this.goal.recurrence = this.originalGoal.recurrence;
      this.goal.active = this.originalGoal.active;
      this.goal.direction = this.originalGoal.direction;
    }
    console.log('settings init');
    console.log(this.goal);
  }

  save() {
    if (!this.currentlySaving) {
      this.currentlySaving = true
//      this.goalService.save(this.goal)
//        .then(result => {
//          this.dialogRef.close();
//          this.currentlySaving = false;
//        });
    }
    this.viewCtrl.dismiss();
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }

}
