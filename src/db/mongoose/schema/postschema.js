import { Schema } from "mongoose";

// mongoose schema form blog Post schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    content: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 5000
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default PostSchema;