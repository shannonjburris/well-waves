const { AuthenticationError } = require('apollo-server-express');
const { Profile, Sounds } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    sounds: async () => {
      return Sounds.find();
    },
    sound: async (parent, { soundsId }) => {
      return Sounds.findOne({ _id: soundsId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    addSound: async (parent, { profileId, sounds }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { sounds: sounds },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSound: async (parent, { profileId, sounds }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { sounds: sounds } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
