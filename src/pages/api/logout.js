import cookie from "cookie";
import isLogedIn from "@/utils/isLogedIn";

const handler = async (req, res) => {
    if (req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({ message: "You are not authorized to access API" })

    try {
        res.setHeader('Set-Cookie', cookie.serialize('token', '', { httpOnly: true, maxAge: -1, path: '/' }));
        return res.status(200).json({ message: 'user logged out' })
    }
    catch {
        return res.status(200).json({ message: 'user logged out faild' })

    }
}

export default isLogedIn(handler)