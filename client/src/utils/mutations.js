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
export const ADD_EMPLOYER= gql`
    mutation Mutation(
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        addEmployer(
            username: $username,
            email: $email,
            password: $password
        ) {
        token
        employer {
            _id
            username
            email
        }
        }
    }
`

export const ADD_JOB= gql`
mutation Mutation(
    $name: String!,
    $description: String!,
    $employer: ID!
) {
    addJob(
        name: $name,
        description: $description,
        employer: $employer
    ) {
      _id
      name
    }
  }
`
export const UPDATE_JOB= gql`
mutation Mutation(
    $updateJobId: ID!,
    $worker: ID
) {
    updateJob(
        id: $updateJobId,
        worker: $worker
    ) {
      name
    }
  }
`
export const REMOVE_WORKER_FROM_JOB = gql`
mutation RemoveWorkerFromJob(
    $removeWorkerFromJobId: ID!
) {
  removeWorkerFromJob(
        id: $removeWorkerFromJobId
    ) {
    _id
  }
}
`