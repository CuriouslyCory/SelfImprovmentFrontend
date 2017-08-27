// import core components
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

// import dialog content for adding a new goal
import { GoalSettingsComponent } from '../goal-settings/goal-settings.component';

// import collections
import { Goals } from '../../../../api/server/collections/goals.collection';
import { Tallies } from '../../../../api/server/collections/tallies.collection';

// import models
import { Goal } from '../../../../api/server/models/goal';
import { Tally } from '../../../../api/server/models/tally
';
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

  constructor( public dialog: MdDialog, private goalService: GoalService ) {
    // subscribe to the goal service to watch any changes to goals.
    goalService.goals$.subscribe(
      goals => this.goals = goals
    );
  }

  ngOnInit() {
    this.goals = Goals
      .find({})
      .mergeMap ((goals: Goal []) =>
        Observable.combineLatest(
          goals.map((goal: Goal) =>
            Tallies
              .find({goalId: goal._id})
              .startWith ( null )
              .map(tallies => {
                // change to sum of all tallies
                if (tallies) { goal.progress = 2 };
                return chat;
              })
          )
        )
      ).zone();
  }

  addNew() {
    const DIALOGREF = this.dialog.open( GoalSettingsComponent );
  }

}
