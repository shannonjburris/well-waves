
import { gql } from '@apollo/client';

export const QUERY_SOUNDS = gql`
    query getSounds {
        sounds {
            _id
            name
            tags
            link
        }
    }
`;

export const QUERY_SINGLE_SOUNDS = gql`
    query getSingleSound($soundId: ID!) {
        sound(soundId: $soundId) {
            _id
            name
            tags
            link
        }
    }
`;

export const QUERY_ME = gql` 
query Me {
    me {
      _id
      email
      password
      sounds {
        _id
        name
        link
        tags
      }
    }
  }
`;


