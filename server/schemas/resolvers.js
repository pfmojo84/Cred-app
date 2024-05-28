const { Worker, Employer, Job } = require('../models');

const resolvers = {

    // finds all worker employer and job data
    Query: {
        workers: async () => {
            return await Worker.find({});
        },
        employers: async () => {
            return await Employer.find({});
        },
        jobs: async () => {
            return await Job.find({})
        }
    },

    // populates Employer and Worker fields with relevant job data
    Employer: {
        jobs: async (employer) => {
            const jobs = await Job.find({ employer: employer._id });
            return jobs;
        }
    },
    Worker: {
        jobs: async (worker) => {
            const jobs = await Job.find({ worker: worker._id })
            return jobs;
        }
    },
    Job: {
        employer: async (job) => {
            const employer = await Employer.findById(job.employer);
            return employer;
        },
        worker: async (job) => {
            const worker = await Worker.findById(job.worker);
            return worker;
        }
    }
}

module.exports = resolvers;