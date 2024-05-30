const typeDefs = `
type Worker {
    _id: ID
    username: String
    email: String
    profession: String
    jobs: [Job]
}

type Employer {
    _id: ID
    username: String
    email: String
    jobs: [Job]
}

type Job {
    _id: ID
    name: String
    description: String
    employer: Employer
    worker: Worker
}

type Auth {
    token: ID!
    worker: Worker
    employer: Employer
}

type Query {
    workers: [Worker]
    employers: [Employer]
    jobs: [Job]
    job(id: ID!): Job
}

type Mutation {
    addJob(
        name: String!
        description: String!
        employer: ID!
    ): Job
    
    updateJob(
        id: ID!
        worker: ID
        description: String
        name: String
    ): Job

    deleteJob(id: ID!): Job

    addWorker(
        username: String!
        email: String!
        password: String!
        profession: String!
    ): Auth

    updateWorker(
        id: ID!
        username: String
        email: String
        password: String
        profession: String
    ): Worker

    deleteWorker(id: ID!): Worker

    addEmployer(
        username: String!
        email: String!
        password: String!
    ): Auth

    updateEmployer(
        id: ID!
        username: String
        email: String
        password: String
    ): Employer

    deleteEmployer(id: ID!): Employer

    login(
        email: String!
        password: String!
        userType: String!
    ): Auth
}
`
module.exports = typeDefs;