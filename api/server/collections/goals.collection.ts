import { MongoObservable } from 'meteor-rxjs';
import { Goal } from '../models/goal';
 
export const GoalCollection = new Mongo.Collection('goals');
export const Goals = new MongoObservable.Collection(GoalCollection);