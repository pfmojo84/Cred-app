import { gql } from '@apollo/client';

export const LOGIN_USER= gql`
    mutation Mutation(
        $email: String!, 
        $password: String!, 
        $userType: String!
    ) {
        login(
            email: $email, 
            password: $password, 
            userType: $userType
        ) {
        token
        worker {
            _id
            username
          }
        }
    }
`;

export const ADD_WORKER= gql`
    mutation Mutation(
        $username: String!, 
        $email: String!, 
        $password: String!, 
        $profession: String!
    ) {
        addWorker(
            username: $username, 
            email: $email, 
            password: $password, 
            profession: $profession
        ) {
        token
        worker {
            _id
            username
            email
            profession
          }
        }
    }
`