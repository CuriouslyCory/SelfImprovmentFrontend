import { MongoObservable } from 'meteor-rxjs';
import { Tally } from '../models/tally';
import { GoalCollection } from  './goals.collection';

export const TallyCollection = new Mongo.Collection('tallies');
export const Tallies = new MongoObservable.Collection(TallyCollection);

TallyCollection.after.insert(function (userId, doc: Tally) {
  GoalCollection.update({'_id': doc.goalId}, {$inc: {progress: doc.value} });
});