import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

import { Goals } from 'api/collections/goals.collection';
import { Tallies } from 'api/collections/tallies.collection';

import { Goal } from 'api/models/goal';
import { Tally } from 'api/models/tally';
 
@Injectable()
export class GoalService{
  
  goals: any;
  
  constructor() {
    
  }

}