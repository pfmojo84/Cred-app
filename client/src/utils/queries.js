import { gql } from "@apollo/client";

export const GET_JOBS = gql`
query Query {
  jobs {
    _id
    name
    description
    employer {
      _id
      username
      email
    }
    worker {
      _id
      username
      email
      profession
    }
  }
}
`

export const GET_WORKERS= gql`
query Workers {
  workers {
    username
    email
    profession
  }
}
`
export const GET_WORKER=gql`
query Worker($workerId: ID!) {
  worker(id: $workerId) {
    _id
    username
    email
    profession
    jobs {
      _id
      name
      description
    }
  }
}
`

export const GET_EMPLOYER=gql`
query Employer($employerId: ID!) {
  employer(id: $employerId) {
    _id
    username
    email
    jobs {
      _id
      name
      description
      worker {
        username
      }
    }
  }
}
`