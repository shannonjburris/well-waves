
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(name: String!, $email: String!, $password: String!) {
    login(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SOUND = gql`
mutation addSound($name: String!, $length: Number!, $tags: String!, $link: String!) {
    addUser(name: $name, length: $length, tags: $tags, link: $link) {
      sound {
        _id
        name
        length
        link
      }
    }
  }
`;

