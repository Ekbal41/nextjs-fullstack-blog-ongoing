import isLogedIn from "@/utils/isLogedIn"
const handler = async (req, res) => {

    res.status(200).json(req.user)
}

export default isLogedIn(handler)