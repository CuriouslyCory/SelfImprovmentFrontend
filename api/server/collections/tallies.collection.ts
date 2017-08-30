import { MongoObservable } from 'meteor-rxjs';
import { Tally, Goal } from '../models';
import { GoalCollection } from  './goals.collection';
import * as moment from 'moment';

export const TallyCollection = new Mongo.Collection('tallies');
export const Tallies = new MongoObservable.Collection(TallyCollection);

TallyCollection.before.insert(function (userId, doc: Tally) {
  // add timestamps
  // todo: record and report based on local timezone
  doc.day = parseInt(moment().format("DDD")); // 1-365 Day
  doc.week  = parseInt(moment().format("W")); // 1-53 Week
  doc.month = parseInt(moment().format("M")); // 1-12 Month
  doc.year = parseInt(moment().format("YYYY")); // 4 digit year
});