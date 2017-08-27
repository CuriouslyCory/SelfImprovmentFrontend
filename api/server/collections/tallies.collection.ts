import { MongoObservable } from 'meteor-rxjs';
import { Tally } from '../models/tally';
 
export const Tallies = new MongoObservable.Collection<Tally>('tallies');