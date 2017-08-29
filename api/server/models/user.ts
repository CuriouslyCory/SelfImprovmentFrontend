import { Profile } from './profile';

export interface User extends Meteor.User {
  profile?: Profile;
}