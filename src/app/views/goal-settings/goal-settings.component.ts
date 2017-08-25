// import core libraries
import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

// import services
import { GoalService } from '../../services/goal.service';

// import models
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-goal-settings',
  templateUrl: './goal-settings.component.html',
  styleUrls: ['./goal-settings.component.scss']
})
export class GoalSettingsComponent implements OnInit {

  @Input() goal: Goal;
  public currentlySaving: boolean;

  constructor( public dialogRef: MdDialogRef<GoalSettingsComponent>, private goalService: GoalService ) { }

  ngOnInit() {
    if ( !this.goal ) {
      this.goal = new Goal();
    }
  }

  save() {
    if (!this.currentlySaving) {
      this.currentlySaving = true
      this.goalService.save(this.goal)
        .then(result => {
          this.dialogRef.close();
          this.currentlySaving = false;
        });
    }
  }

}
