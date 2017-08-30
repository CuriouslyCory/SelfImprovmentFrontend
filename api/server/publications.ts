import { Goal, Tally } from './models';
import { Goals, Tallies } from './collections';


Meteor.publish('goals', function() {
    return Goals.collection.find({ userId: this.userId});
});

Meteor.publish('tallies', function( ) {
    //return all tallies associated with this user
    if (!this.userId) {
      return this.ready();
    }
  
    let ids = [];
    Goals.collection.find({ userId: this.userId}).forEach((goal: Goal) => {
      ids.push(goal._id);
    });
  
    return Tallies.collection.find({ goalId: {$in: ids} });
});