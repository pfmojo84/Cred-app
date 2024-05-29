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

type Query {
    workers: [Worker]
    employers: [Employer]
    jobs: [Job]
    job(id: ID!): Job
}

type Mutation {
    addJob(name: String!, description: String!, employer: ID!): Job
    updateJob(id: ID!, worker: ID, description: String, name: String): Job
    deleteJob(id: ID!): Job

    addWorker(username: String!, email: String!, password: String! profession: String!): Worker
    updateWorker(id: ID!, username: String, email: String, password: String, profession: String): Worker
    deleteWorker(id: ID!): Worker

    addEmployer(username: String!, email: String!, password: String!): Employer
    updateEmployer(id: ID!, username: String, email: String, password: String): Employer
    deleteEmployer(id: ID!): Employer
}
`
module.exports = typeDefs;