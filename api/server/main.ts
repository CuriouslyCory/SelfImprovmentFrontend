import { Meteor } from 'meteor/meteor';
import { Goals } from './collections/goals.collection';
import { Tallies } from './collections/tallies.collection';
import { Users } from  './collections/users.collection';

Meteor.startup(() => {
  // code to run on server at startup
  
  
  if ( Goals.find({}).cursor.count() === 0 ) {
    let userId;
    let goalId;
    
    userId = Users.collection.insert({
      email: 'cory@hau.me',
      firstName: 'Cory',
      lastName: 'Sougstad',
      password: 'drowssap'
    });
    
    goalId = Goals.collection.insert({
      userId: userId,
      active: true,
      title: 'Drink More Water',
      direction: 'min',
      target: 8,
      recurrence: 'day'
    });
    
    Tallies.collection.insert({
      goalId: goalId,
      value: 1
    });
    Tallies.collection.insert({
      goalId: goalId,
      value: 1
    });
    Tallies.collection.insert({
      goalId: goalId,
      value: -1
    });
    
    goalId = Goals.collection.insert({
      userId: userId,
      active: true,
      title: 'Drink Less Booze',
      direction: 'max',
      target: 8,
      recurrence: 'week'
    });
    
    Tallies.collection.insert({
      goalId: goalId,
      value: 1
    });
    Tallies.collection.insert({
      goalId: goalId,
      value: 1
    });
    
    goalId = Goals.collection.insert({
      userId: userId,
      active: true,
      title: 'Meditate',
      direction: 'min',
      target: 4,
      recurrence: 'week'
    });
    
    Tallies.collection.insert({
      goalId: goalId,
      value: 1
    });
    
    
  }
});