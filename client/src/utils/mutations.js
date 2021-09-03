import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      users {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      users {
        _id
        email
      }
    }
  }
`;

export const ADD_SOUND = gql`
  mutation addSound($name: String!, $tags: String!, $link: String!) {
    addSound(name: $name, tags: $tags, link: $link) {
      sounds {
        _id
        name
        link
      }
    }
  }
`;

export const ADD_USER_SOUND = gql`
mutation addUserSound($soundData: ID!) {
  addUserSound(soundData: $soundData) {
    _id
    email
    sounds {
      _id
    }
  }
}
`;

export const DELETE_USER_SOUND = gql`
mutation deleteUserSound($soundData: ID!) {
  deleteUserSound(soundData: $soundData) {
    _id
    email
    sounds {
      _id
    }
  }
}
`;