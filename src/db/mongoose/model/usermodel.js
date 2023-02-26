import { model, models } from "mongoose";
import UserSchema from "../schema/userschema";

// make model with imported userschema
const UserModel = models.User || model("User", UserSchema);


export default UserModel;