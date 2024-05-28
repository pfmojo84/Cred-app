const { Schema, model } = require('mongoose');

// schema for creating a worker model with email validation
const workerSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email format'
        },
        password: {
            type: String,
            required: true
        },
        profession: {
            type: String,
            required: true
        },
        jobs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Job'
            }
        ]
    }
)

const Worker = model('Worker', workerSchema);

module.exports = Worker;
