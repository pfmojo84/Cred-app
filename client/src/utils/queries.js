import { gql } from "@apollo/client";

export const GET_JOBS = gql`
query Job {
    jobs {
      _id
      name
      description
      employer {
        username
      }
      worker {
        username
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