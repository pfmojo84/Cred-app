const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// schema for creating an employer model with email validation
const employerSchema = new Schema(
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
        jobs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Job'
            }
        ]
    }
);

employerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 12;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});

employerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const Employer = model('Employer', employerSchema);

module.exports = Employer;