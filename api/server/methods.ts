import { Goals, Tallies } from './collections';
import { Goal, Tally } from './models';
import { Profile } from './models/profile';
import { check, Match } from 'meteor/check';

 
 
const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});
 
Meteor.methods({  
  addTally(goalId: string, value: number) {
    // todo: Validate that the goal is owned by the registered user
    if ( !this.userId ) {
      throw new Meteor.Error('unauthorized', 'User must be logged in to log progress');
    }
    
    return {
      tallyId: Tallies.collection.insert({
        goalId: goalId,
        value: value
      })
    };
  },
  
  updateProfile (profile: Profile): void {
    if ( !this.userId ) {
      throw new Meteor.Error('unauthorized', 'User must be logged in to update their profile');
    }
    
    check(profile, {
      name: nonEmptyString
    });
    
    Meteor.users.update(this.userId, {
      $set: {profile}
    })
  },
  
  upsertGoal (goal: Goal) {
    if ( !this.userId ) {
      throw new Meteor.Error('unauthorized', 'User must be logged in to update their profile');
    }
    
//    check(goal, {
//      title: nonEmptyString
//    });
    
    goal.userId = this.userId;
    
    return {goalId: Goals.collection.upsert({_id: goal._id}, goal)};
  },
  
  deleteGoal (goal: Goal) {
    if ( !this.userId ) {
      throw new Meteor.Error('unauthorized', 'User must be logged in to update their profile');
    }
    
//    check(goal, { _id: nonEmptyString });
    
    // remove goal where id matches the goal passed in AND the goal belongs to the user.
    Goals.collection.remove({_id: goal._id, userId: this.userId});
    Tallies.collection.remove({goalId: goal._id});
    
  }
});