
import { gql } from '@apollo/client';

export const QUERY_SOUNDS = gql`
    query getSounds {
        sounds {
            _id
            name
            length
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
            length
            tags
            link
        }
    }
`;

