
import { useState } from "react"

export const register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const onFormSubmit = () => {
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            password: '',
        })
    }


    return (
        <div className="container w-50 top-110 border border-primary rounded p-3">
            <h1 className="text-center text-uppercase text-primary fs-1">Create account</h1>
            <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" value={formData.name} id="" className="form-control" onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                })} placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Blog title</small>
            </div>
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



            <button onClick={onFormSubmit} className=" btn btn-primary">Register</button>

        </div>
    )
}

export default register
