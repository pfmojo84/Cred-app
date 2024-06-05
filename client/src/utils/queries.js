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
