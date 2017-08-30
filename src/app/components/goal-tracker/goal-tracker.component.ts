// import core components
import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import * as moment from 'moment';

// import the option menu
import { GoalTrackerOptionMenu } from './goal-tracker.option.menu';

// import models
import { Goal } from 'api/models/goal';

// import dialog content for adding a new goal
//import { GoalSettingsComponent } from '../../views/goal-settings/goal-settings.component';

@Component({
  selector: 'si-goal-tracker',
  templateUrl: './goal-tracker.component.html'
})
export class GoalTrackerComponent implements OnInit {

  @Input() goal: Goal;
  currentColor: string;
  currentPercentComplete: string | number;
  pacePercent: string;

  constructor( public popoverCtrl: PopoverController ) { }

  ngOnInit(): void {
    // set the current color and percentage
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();

    console.log(this.goal.progress);
    
    this.setPacePercent();
  }

  // add one to the goal progrss
  public modProgress ( i ): void {
//    if ( this.goal.progress + i < 0 ) {
//      return;
//    }
//
//    this.goal.progress += i;
    
    MeteorObservable.call('addTally', this.goal._id, i).subscribe({
      next: () => {
        console.log('add tally success');
        this.currentColor = this.colorStatus();
        this.currentPercentComplete = this.percentComplete();
      },
      error: (e: Error) => {
        console.log(e);
      }
    });

  }

  // calulate the current percentage complete
  public percentComplete ( asString = true): string | number {
    if ( asString ) {
      return (this.goal.progress / this.goal.target) * 100 + '%';
    } else {
      return (this.goal.progress / this.goal.target) * 100;
    }
  }

  // returns the appropriate color string depending on the warn level
  public colorStatus(): string {
    const PROGRESSNUM = this.goal.progress / this.goal.target;
    if ( this.goal.direction === 'max' ) {
      if ( PROGRESSNUM < 0.5 ) {
        return '#43a047';
      } else if ( PROGRESSNUM >= 0.50 && PROGRESSNUM < 1) {
        return '#FFC107';
      } else if ( PROGRESSNUM >= 1) {
        return '#F44336';
      }
    } else if (this.goal.direction === 'min' ) {
      if ( PROGRESSNUM <= 0.25 ) {
      return '#F44336';
      } else if ( PROGRESSNUM < 1 && PROGRESSNUM > 0.25) {
        return '#FFC107';
      } else if ( PROGRESSNUM >= 1 ) {
        return '#43a047';
      }
    }
  }
  
  public optionsMenu(myEvent) { 
    let popover = this.popoverCtrl.create(GoalTrackerOptionMenu, {goal : this.goal});
    popover.present({
      ev: myEvent
    });
  }
  
  private setPacePercent () {
    if(this.goal.recurrence === 'day'){
      let hour = parseInt(moment().format('H'));
      this.pacePercent = Math.floor(hour / 24 * 100) + "%";
    }else if(this.goal.recurrence === 'week'){
      let dayOfWeek = parseInt(moment().format('e')) + 1;
      this.pacePercent = Math.floor(dayOfWeek / 7 * 100) + "%";
    }else if(this.goal.recurrence === 'month'){
      let day = parseInt(moment().format('D'));
      let totalDays = moment().daysInMonth();
      this.pacePercent = Math.floor(day / totalDays * 100) + "%";
    }
  }

}
