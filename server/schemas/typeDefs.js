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

  type Query {
    profiles: [Profile]
    sounds: [Sound]
  }

  type Mutation {
    addSound(name: String!, length: Number!, tag: String!): Sound
    removeSound(name: String!, length: Number!, tag: String!): Sound
    addProfile(name: String!, email: String!, password: String!): Profile
    removeProfile(name: String!, email: String!, password: String!): Profile
  }
`;

module.exports = typeDefs;