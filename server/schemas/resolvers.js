const { AuthenticationError } = require('apollo-server-express');
const { User, Character} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('savedChars');
    },
    singleUser: async (parent, { username}) => {
      console.log(username)
      return await User.findOne({username}).populate('savedChars');
    },
    characters: async () => {
      return await Character.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveCharacter: async (parent, { username, newCharacter}) => {
      const character = await Character.create(newCharacter);

      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { savedChars: character._id } }
      );

      return character;
    },

  },
};

module.exports = resolvers;
