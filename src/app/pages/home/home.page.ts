import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MeteorObservable } from 'meteor-rxjs';

import { Goals } from 'api/collections/goals.collection';
import { Tallies } from 'api/collections/tallies.collection';

import { Goal } from 'api/models/goal';
 
@Component({
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit{
  
  goals: any;
  
  constructor( ) {
    
  }
  
  ngOnInit() {
    MeteorObservable.subscribe('goals').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.goals = this.findGoals();
      });
    });
  }
  
  findGoals() {
    return Goals.find().map(goals => {
      return goals;
    });
  }
 
}