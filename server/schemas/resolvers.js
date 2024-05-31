const { Worker, Employer, Job } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
        },
        job: async (parent, args) => {
            return await Job.findById(args.id).populate('employer').populate('worker');
        },
        worker: async (parent, args) => {
            return await Worker.findById(args.id);
        },
        employer: async (parent, args) => {
            return await Employer.findById(args.id);
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
    },

    Mutation: {

        // This block handles creation, updating, and deletion of Jobs
        addJob: async (parent, { name, description, employer }) => {
            return await Job.create({ name, description, employer });
        },
        updateJob: async (parent, { id, worker, description, name }) => {
            
            // creates an update fields object and stores any selected arguments within
            const updateFields = {};
            if(worker) updateFields.worker = worker;
            if(driptioescn) updateFields.description = description;
            if(name) updateFields.name = name;
            
            return await Job.findByIdAndUpdate(
                { _id: id },
                updateFields,
                { new: true }

            );
        },
        deleteJob: async (parent, { id }) => {
            return await Job.findByIdAndDelete({_id: id});
        },

        // This block handles creation, updating, and deletion of Workers
        addWorker: async (parent, { username, email, password, profession }) => {
            const worker = await Worker.create({ username, email, password, profession });
            const token = signToken(worker);
            return { token, worker }
        },
        updateWorker: async (parent, { id, username, email, password, profession }) => {
            
            // creates an update fields object and stores any selected arguments within
            const updateFields = {};
            if(username) updateFields.username = username;
            if(email) updateFields.email = email;
            if(password) updateFields.password = password;
            if(profession) updateFields.profession = profession;
            
            return await Worker.findOneAndUpdate(
                { _id: id },
                updateFields,
                { new: true }
            )
        },
        deleteWorker: async (parent, { id }) => {
            return await Worker.findByIdAndDelete({ _id: id })
        },

        // This block handles creation, updating, and deletion of Employers
        addEmployer: async (parent, { username, email, password }) => {
            const employer =  await Employer.create({username, email, password});
            const token = signToken(employer);
            return { token, employer }
        },
        updateEmployer: async (parent, {id, username, email, password}) => {
            const updateFields = {};
            if(username) updateFields.username = username;
            if(email) updateFields.email = email;
            if(password) updateFields.password = password;

            return await Employer.findByIdAndUpdate(
                { _id: id },
                updateFields,
                { new: true }
            );
        } ,
        deleteEmployer: async (parent, { id }) => {
            return await Employer.findByIdAndDelete({ _id: id });
        },

        login: async (parent, { email, password, userType }) => {

            let user;

            // if userType is Worker the worker model is searched by email for a user and result is set to user
            // otherwise the employer model is searched and the result is set to user
            if (userType === 'Worker') {
                user = await Worker.findOne({ email });
            } else if (userType === 'Employer') {
                user = await Employer.findOne({ email });
            };

            if(!user) {
                throw AuthenticationError;
            }

            const checkPassword = await user.isCorrectPassword(password);

            if (!checkPassword) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user }
        }
    }
}

module.exports = resolvers;