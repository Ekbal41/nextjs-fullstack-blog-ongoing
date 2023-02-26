import PostSchema from "../schema/postschema";
import { model, models } from "mongoose";

// make mongoose model for the post schema
const PostModel = models.Post || model("Post", PostSchema);

export default PostModel;
