const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedChars: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Character {
    charId: ID!
    name: String
    link: String
  }

  type Query {
    users: [User]
    singleUser(id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;