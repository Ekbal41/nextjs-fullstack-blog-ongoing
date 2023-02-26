
import axios from "axios"
import { useState } from "react"
import { UserContext } from "@/context/userContext"
import { useContext } from "react"


export const login = () => {
    const { user, setUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
       
        email: '',
        password: '',
    })

    const onFormSubmit = () => {
        axios.post('http://localhost:3000/api/login', formData)
        .then((res) => {
            setUser(res.data)
            console.log(res)
        })
        .catch((err) => {})

        

        setFormData({
         
            email: '',
            password: '',
        })
    }


    return (
        <div className="container w-50 top-110 border border-primary rounded p-3 pb-5">
            <h1 className="text-center text-uppercase text-primary fs-1 py-3">Log In</h1>
           
            <div className="mb-3">
                <label className="form-label">Your Mail</label>
                <input type="email" value={formData.email} id="" className="form-control" onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                })} placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Email</small>
            </div>
            <div className="mb-3">
                <label className="form-label">Set password</label>
                <input type="text" value={formData.password} id="" className="form-control" onChange={(e) => setFormData({
                    ...formData,
                    password: e.target.value
                })} placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Password</small>
            </div>



            <button onClick={onFormSubmit} className=" btn btn-primary">Log In</button>

        </div>
    )
}

export default login
