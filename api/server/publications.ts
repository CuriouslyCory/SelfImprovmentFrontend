import { Goal } from './models/goal';
import { Tally } from './models/tally';
import { Goals } from './collections/goals.collection';
import { Tallies } from './collections/tallies.collection';


Meteor["publishComposite"]('goals', function() {
//  if (!this.userId) {
//    return;
//  }

  return {
    find: () => {
      return Goals.collection.find({ });
    },

//    children: [
//      <PublishCompositeConfig1<Chat, Message>> {
//        find: (chat) => {
//          return Messages.collection.find({ chatId: chat._id }, {
//            sort: { createdAt: -1 },
//            limit: 1
//          });
//        }
//      },
//      <PublishCompositeConfig1<Chat, User>> {
//        find: (chat) => {
//          return Users.collection.find({
//            _id: { $in: chat.memberIds }
//          }, {
//            fields: { profile: 1 }
//          });
//        },
//        children: [
//          <PublishCompositeConfig2<Chat, User, Picture>> {
//            find: (user, chat) => {
//              return Pictures.collection.find(user.profile.pictureId, {
//                fields: { url: 1 }
//              });
//            }
//          }
//        ]
//      }
//    ]
  };
});