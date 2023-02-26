import { Schema } from "mongoose";

// mongoose schema form blogs User who is also author schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

export default UserSchema;