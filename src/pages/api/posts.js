
import PostModel from '@/db/mongoose/model/postmodel'
import { connectToDatabase } from '@/db/mongodb/connectToDatabase'
import isLogedIn from "@/utils/isLogedIn"

const handeler = async (req, res) => {
    if (req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({ message: "You are not authorized to access API" })
    if (req.method === 'GET') {
        await connectToDatabase()
        // const posts = await PostModel.find({}).populate('author')
        //get the post of the logined user
        const posts = await PostModel.find({ author: req.user._id }).populate('author')

        if (posts) {
            return res.status(200).json({ posts })
        }

        return res.status(200).json({ message: "no post" })
    }

}

export default isLogedIn(handeler)