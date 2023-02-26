import { closeDbConnection, connectToDatabase } from '@/db/mongodb/connectToDatabase'
import { hash } from 'bcrypt'
import UserModel from '@/db/mongoose/model/usermodel'

export default async function handler(req, res) {
  const { name, email, password } = req.body
  var hashedPassword;

  if (req.method === 'POST') {
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
