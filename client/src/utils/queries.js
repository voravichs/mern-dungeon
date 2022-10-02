import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
  query SingleUser($id: ID!) {
    singleUser(_id: $id) {
      _id
      username
      email
      savedChars {
        _id
        name
        link
        level
        health
        attack
        defense
      }
    }
  }
`;