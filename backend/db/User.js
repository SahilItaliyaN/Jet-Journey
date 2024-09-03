// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     gender:String,
//     dob:date,
//     password:String,
// });

// module.exports = mongoose.model("users",userSchema);

const mongoose = require('mongoose');

// Define the schema for user registration
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('users', userSchema);