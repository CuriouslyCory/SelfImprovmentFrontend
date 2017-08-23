// import core components
import { Component, Input, OnInit } from '@angular/core';

// import models
import { Goal } from '../../models/goal';


@Component({
  selector: 'si-goal-tracker',
  templateUrl: './goal-tracker.component.html',
  styleUrls: ['./goal-tracker.component.scss']
})
export class GoalTrackerComponent implements OnInit {

  @Input() goal: Goal;
  currentColor: string;
  currentPercentComplete: string | number;

  constructor() { }

  ngOnInit(): void {
    // set the current color and percentage
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  // add one to the goal progrss
  public addProgress (): void {
    this.goal.progress += 1;

    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  // subtract one from the progress tracker
  public subtractProgress (): void {
    // you can't go below zero
    if (this.goal.progress - 1 >= 0 ) {
      this.goal.progress -= 1;

      this.currentColor = this.colorStatus();
      this.currentPercentComplete = this.percentComplete();
    }
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
