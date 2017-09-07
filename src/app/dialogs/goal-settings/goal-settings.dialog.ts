// import core libraries
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
// import collections
import { Goals } from 'api/server/collections';

// import models
import { Goal } from 'api/models/goal';

// import services
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'app-goal-settings',
  templateUrl: './goal-settings.dialog.html'
})
export class GoalSettingsDialog implements OnInit {
  
  public currentlySaving: boolean;
  private originalGoal: Goal;
  public goal: Goal;

  constructor( 
    private params: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private goalService: GoalService
  ) { }

  ngOnInit() {
    
    this.originalGoal = this.params.get('goal');
    this.goal = {} as Goal;
    if ( this.originalGoal ) {
      // clone the current settings in case we want to cancel
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

  save(): void {
    MeteorObservable.call('upsertGoal', this.goal).subscribe({
      next: () => {
        this.viewCtrl.dismiss();
        // resub after add to pull new tallies into group
        this.goalService.subscribeToPubs();
      },
      error: (e: Error) => {
        this.handleError(e);
      }
    });
    
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  handleError (e: Error): void {
    console.error(e);
    
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ["Ok"]
    });
    
    alert.present();
  }

}
