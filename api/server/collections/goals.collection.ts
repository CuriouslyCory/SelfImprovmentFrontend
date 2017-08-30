import { MongoObservable } from 'meteor-rxjs';
import { Goal } from '../models/goal';
import * as moment from 'moment';
import { Tallies, TallyCollection } from './tallies.collection';
 
export const GoalCollection = new Mongo.Collection('goals');
export const Goals = new MongoObservable.Collection(GoalCollection);

GoalCollection.before.upsert((userId, selector, modifier, options) =>{
  // santitize the progress field
  if ( !modifier.progress ) {
    console.log('Sanitize progress');
    modifier.progress = 0;
  }
});