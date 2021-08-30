const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Sounds {
    _id: ID
    name: String
    length: Number
    tags: String
  }

  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;