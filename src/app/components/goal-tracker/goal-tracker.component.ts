import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../../models/goal';


@Component({
  selector: 'si-goal-tracker',
  templateUrl: './goal-tracker.component.html',
  styleUrls: ['./goal-tracker.component.scss']
})
export class GoalTrackerComponent implements OnInit {

  @Input() goal: Goal;
  currentColor: string;
  currentPercentComplete: string;

  constructor() { }

  ngOnInit() {
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  public addProgress (goalId) {
    this.goal.progress += 1;
    
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  public subtractProgress (goalId) {
    this.goal.progress -= 1;
    
    this.currentColor = this.colorStatus();
    this.currentPercentComplete = this.percentComplete();
  }

  public percentComplete () {
    return (this.goal.progress / this.goal.target) * 100 + '%';
  }

  public colorStatus() {
    const PROGRESSNUM = this.goal.progress / this.goal.target;
    console.log(PROGRESSNUM);
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
