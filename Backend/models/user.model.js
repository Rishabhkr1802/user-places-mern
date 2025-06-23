import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    }
});

export const UserModel = mongoose.model('User', userSchema);