
import axios from "axios"
import { useState } from "react"
import { UserContext } from "@/context/userContext"
import { useContext } from "react"
import { useRouter } from "next/router"
import { set } from "mongoose"


export const login = () => {

    const router = useRouter()
    const { user, setUser } = useContext(UserContext)
    const [ isLoading, setIsLoading ] = useState(false)

    const [formData, setFormData] = useState({
       
        email: '',
        password: '',
    })
    const [message, setMessage] = useState('')

    const onFormSubmit = () => {
        setIsLoading(true)
        axios.post('http://localhost:3000/api/login', formData)
        .then((res) => {
            setMessage(res.data.message)
            setIsLoading(false)
            setTimeout(() => {
                router.push('/')
            }, 1000)
            console.log(res)
        })
        .catch((err) => {})

        

        setFormData({
         
            email: '',
            password: '',
        })
    }
    const hideTost = () => {
        setMessage('')

    }


    return (
        <>
        
        {message && <div className="toast show border border-primary rounded" role="alert" aria-live="assertive" aria-atomic="true"
                style={{ position: 'absolute', top: '100px', right: '20px' }}
            >
                <div class="toast-header rounded">
                    <strong className="me-auto text-primary">Next Blog</strong>
                    <small>Just Now</small>
                    <button type="button" onClick={hideTost} class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="toast-body rounded">
                    {message}<br />
                    You will be redirected to home page in a second.
                </div>

            </div>}
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
                <label className="form-label">Password</label>
                <input type="text" value={formData.password} id="" className="form-control" onChange={(e) => setFormData({
                    ...formData,
                    password: e.target.value
                })} placeholder="" aria-describedby="helpId" />
                <small id="helpId" className="text-muted">Password</small>
            </div>



            <button onClick={onFormSubmit} className=" btn btn-primary">
            {
                isLoading ? 'Loading...' : 'Log In'
            }
            </button>

        </div>
        </>
    )
}

export default login
