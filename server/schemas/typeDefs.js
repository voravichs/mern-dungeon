const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedChars: [Character]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Character {
    _id: ID!
    name: String
    link: String
    level: Int
    health: Int
    attack: Int
    defense: Int
  }

  input inputCharacter {
    name: String
    link: String
    level: Int
    health: Int
    attack: Int
    defense: Int
  }

  type Query {
    users: [User]
    singleUser(_id: ID!): User
    characters: [Character]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCharacter(_id: ID!, newCharacter: inputCharacter!): Character
  }
`;

module.exports = typeDefs;