const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
            required: true,
            minlength: 6
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
);

workerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 12;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});

workerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const Worker = model('Worker', workerSchema);

module.exports = Worker;
