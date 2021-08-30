const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String
    email: String
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

  }
`;

module.exports = typeDefs;