// import core components
import { Component, Input, OnInit } from '@angular/core';

// import models
import { Goal } from '../../models/goal';

// import services
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'si-goal-tracker',
  templateUrl: './goal-tracker.component.html',
  styleUrls: ['./goal-tracker.component.scss']
})
export class GoalTrackerComponent implements OnInit {

  @Input() goal: Goal;
  currentColor: string;
  currentPercentComplete: string | number;

  constructor( private goalService: GoalService ) { }

  ngOnInit(): void {
    // set the current color and percentage
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  // add one to the goal progrss
  public modProgress ( i ): void {
    if ( this.goal.progress + i < 0 ) {
      return;
    }

    this.goal.progress += i;
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();

    this.goalService.setProgress(this.goal)
      .then( result => {
        if ( result !== true ) {
          console.log('there was an error saving progress');
        }
      });
  }

  // remove this goal
  public deleteGoal (): void {
    this.goalService.delete(this.goal)
      .then(result => {
        if ( result !== true ) {
          console.log('there was an error deleting this goal');
        }
      });
  }

  // update this goal
  public openSettings (): void {
    
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
        return '#4CAF50';
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
        return '#4CAF50';
      }
    }
  }

}
