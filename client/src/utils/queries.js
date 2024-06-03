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