import { MongoObservable } from 'meteor-rxjs';
import { User } from '../models/user';
 
export const Users = MongoObservable.fromExisting<User>(Meteor.users);