const { AuthenticationError } = require('apollo-server-express');
const { User, Sounds } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    sounds: async () => {
      return Sounds.find();
    },
    sound: async (parent, { soundId }) => {
      return Sounds.findOne({ _id: soundId });
    },
    me: async (parent, args, context) => {
      if(context.user) {
      return User.findOne({ _id: context.user._id }).populate("sounds");
      }
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      console.log("trying to add user")
      const user = await User.create({ email, password });
      const token = signToken(user);
      console.log(user, token)
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUserSound: async (parent, { soundData }, context) => {
      console.log("adding sound with " + soundData + " to user");
      console.log("adding sound to user" + context.user);
      if(context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              sounds: soundData
            }
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
    removeSound: async (parent, { soundData }, context) => {
      if (context.user) {
        return User.findOneAndDelete(
          { _id: context.user._id },
          {
            $pull: {
              sounds: soundData
            }
          }
        );
      }
    },
  },
};

module.exports = resolvers;
