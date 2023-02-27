import { closeDbConnection, connectToDatabase } from '@/db/mongodb/connectToDatabase'
import { hash } from 'bcrypt'
import UserModel from '@/db/mongoose/model/usermodel'

export default async function handler(req, res) {
  if(req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({message : "You are not authorized to access API"})
  const { name, email, password } = req.body
  var hashedPassword;

  if (req.method === 'POST') {
    if(req.query.id !== process.env.NEXT_PUBLIC_KEY) return res.status(200).json({message : "You are not authorized to access API"})
    //make database connection
    await connectToDatabase()
    //hash the given password
    await hash(password, 12).then((hash) => {
      hashedPassword = hash
    }).catch((err) => {
      hashedPassword = password
    })
    try {
      
      // create a new user
      const user = new UserModel({
        name,
        email,
        password: hashedPassword,
      })
      //save the user to the database
      await user.save()
      res.status(200).json({ message: 'Account created successfully' })
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    }
    finally {
      await closeDbConnection()
    }

  }


}
