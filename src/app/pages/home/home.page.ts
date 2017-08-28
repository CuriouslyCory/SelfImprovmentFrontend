import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { Goal } from '../../models/goal';
 
@Component({
  templateUrl: 'home.page.html'
})
export class HomePage {
  
  goals: Observable<any[]>;
  
  constructor() {
    this.goals = this.fetchGoals();
  }
  
  private fetchGoals() {
    return Observable.of([
      {
        _id: '0',
        active: 1,
        title: 'Drink More Water',
        direction: 'min',
        progress: 1,
        target: 8,
        recurrence: 'day',
        tallies: [
          { _id:0, goalId: 0, value: 1 },
          { _id:1, goalId: 0, value: 1 },
          { _id:2, goalId: 0, value: -1 }
        ]
        
      },
      {
        _id: '1',
        active: 1,
        title: 'Drink Lesss Booze',
        direction: 'max',
        progress: 1,
        target: 8,
        recurrence: 'week',
        tallies: [
          { _id:0, goalId: 0, value: 1 },
          { _id:1, goalId: 0, value: 1 },
          { _id:2, goalId: 0, value: 1 }
        ]
        
      },
      {
        _id: '2',
        active: 1,
        title: 'Meditate',
        direction: 'min',
        progress: 1,
        target: 1,
        recurrence: 'day',
        tallies: [
          { _id:0, goalId: 0, value: 1 }
        ]
      },
    ]);
  }
}