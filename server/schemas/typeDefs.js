const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
    sounds: [Sound]
  }

  type Sound {
    _id: ID!
    name: String
    length: Number
    link: String
    tags: String
    users: User
  }

  type Auth {
    token: ID!
    users: User
  }

  type Query {
    users: [User]
    sounds: [Sound]
    user(userId: ID!): User
    sound(soundId: ID!): Sound
  }

  type Mutation {
    addSound(name: String!, length: Number!, tag: String!): Sound
    removeSound(name: String!, length: Number!, tag: String!): Sound

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;