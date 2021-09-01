const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    sounds: [Sound]
  }

  type Sound {
    _id: ID!
    name: String
    link: String
    tags: String
    users: User
  }

  type Auth {
    token: ID!
    users: User
  }

  type Query {
    users: User
    sounds: [Sound]
    user(userId: ID!): User
    sound(soundId: ID!): Sound
  }

  type Mutation {
    addSound(name: String!, tag: String!, link: String!): Sound
    removeSound(name: String!, tag: String!): Sound
    addUserSound(soundData: ID!): User
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;