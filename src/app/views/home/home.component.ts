// import core components
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

// import dialog content for adding a new goal
import { GoalSettingsComponent } from '../goal-settings/goal-settings.component';

// import services
import { GoalService } from '../../services/goal.service';

// import models
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public goals: Goal[];

  recentNotifications = [
    {
      'id': 1,
      'date': '2017-06-22 12:05:00',
      'notificationText': 'Drinking may reduce the motivation you have to do the things that are important to you tonight.'
    },
    {
      'id': 2,
      'date': '2017-06-22 11:05:00',
      'notificationText': 'Give others your undivided attention when in conversation with them.'
    },
    {
      'id': 3,
      'date': '2017-06-22 10:05:00',
      'notificationText': 'Situations that frustrate you are an opportunity to grow.'
    },
  ];

  constructor( public dialog: MdDialog, private goalService: GoalService ) { }

  ngOnInit() {
    this.refreshGoals();
  }

  addNew() {
    const DIALOGREF = this.dialog.open( GoalSettingsComponent );
    DIALOGREF.afterClosed().subscribe(result => {
      console.log(result);
      this.refreshGoals();
    });
  }

  refreshGoals(): void {
    this.goalService.getActive()
      .then( goals => {
        this.goals = goals;
      });
  }

}
