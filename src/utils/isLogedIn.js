import jwt_decode from "jwt-decode";
import { connectToDatabase, closeDbConnection } from "@/db/mongodb/connectToDatabase";
import UserModel from "@/db/mongoose/model/usermodel";
//middleware to verify if the user is logged in
 const isLogedIn = (handler) => {
    return  async (req, res)=>{
        console.log(req.headers)
        await connectToDatabase().then(()=>console.log('connected')).catch((err)=>console.log(err))
        //get the token fron request headers
        const token = req.headers.cookie?.split('=')[1];
        if(!token){
            return res.status(401).json({message : 'Unauthorized : No token found'})
        }
        //verify the token
        var decodedToken = jwt_decode(token);
        const userId = decodedToken.id;
        console.log(userId)
        if(!userId){
            return res.status(401).json({message : 'Unauthorized : Invalid token'})
        }
        //if the token is valid then return the handler
        try{
           
            // find the user in the database
            const userExist = await UserModel.findOne({ _id: userId })
            console.log(userExist)
            if(!userExist){
                return res.status(401).json({message : 'Unauthorized : User not found'})
            }
            //add the user to the request object
            req.user = userExist;
            return handler(req, res);
        }
        catch(err){
            console.log(err)
            return res.status(500).json({message : 'Something went wrong'})
        }
        finally{
            await closeDbConnection();
        }



       
       
    }


}
export default isLogedIn;