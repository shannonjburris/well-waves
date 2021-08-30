const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    sounds: [Sounds]
  }

  type Sound {
    _id: ID!
    name: String
    length: Number
    tags: String
    profiles: Profile
  }

  type Auth {
    token: ID!
    profiles: Profile
  }

  type Query {
    profiles: [Profile]
    sounds: [Sound]
    profiles(profileId: ID!): Profile
    sounds(soundId: ID!): Sound
  }

  type Mutation {
    addSound(name: String!, length: Number!, tag: String!): Sound
    removeSound(name: String!, length: Number!, tag: String!): Sound
    addProfile(name: String!, email: String!, password: String!): Profile
    removeProfile(name: String!, email: String!, password: String!): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;