import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        default: ''
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: Number,
        default: 0
    }
}) 

const User = mongoose.model("User", Userschema);

export default User