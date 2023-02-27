import cookie from "cookie";

export default async function handler(req, res) {
    if(req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({message : "You are not authorized to access API"})
    console.log(req.headers)
    try {
        res.setHeader('Set-Cookie', cookie.serialize('token', '', { httpOnly: true, maxAge: -1 }));
        return res.status(200).json({ message: 'user logged out' })
    }
    catch {
        return res.status(200).json({ message: 'user logged out faild' })

    }
}