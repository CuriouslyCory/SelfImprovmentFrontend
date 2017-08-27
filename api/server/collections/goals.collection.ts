import { MongoObservable } from 'meteor-rxjs';
import { Goal } from '../models/goal';
 
export const Goals = new MongoObservable.Collection<Goal>('goals');