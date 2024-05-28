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
            return await Job.find({}).populate('employer').populate('worker')
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
    }
}

module.exports = resolvers;