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
}
`
module.exports = typeDefs;