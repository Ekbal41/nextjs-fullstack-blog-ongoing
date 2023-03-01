
import PostModel from '@/db/mongoose/model/postmodel'
import { connectToDatabase } from '@/db/mongodb/connectToDatabase'
import isLogedIn from "@/utils/isLogedIn"



const handler = async (req, res) => {
    if (req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({ message: "You are not authorized to access API" })
   
    if (req.method === 'POST') {
        console.log(req.user)
        const { title, content } = req.body
        if (!title || !content) return res.status(200).json({ message: "Please fill all fields" })
        await connectToDatabase()
        const post = new PostModel({
            title,
            content,
            author: req.user._id,
            date: Date.now()
           
        })
        await post.save()


        return res.status(200).json({ message: "Post added successfully" })
    }

}

export default isLogedIn(handler)