import isLogedIn from "@/utils/isLogedIn"
const handler = async (req, res) => {
   
if(req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({message : "You are not authorized to access API"})


    res.status(200).json(req.user)
}

export default isLogedIn(handler)