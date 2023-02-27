import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

export const register = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [message, setMessage] = useState('')

    const onFormSubmit = () => {
        setIsLoading(true)
        //send post request to server
        axios.post('/api/register?id=' + process.env.NEXT_PUBLIC_KEY, formData)
            .then(res => {
                setMessage(res.data.message)
                setIsLoading(false)
                setTimeout(() => {
                    router.push('/login')
                }, 1000)

            })
            .catch(err => {
                console.log(err)
            })



        setFormData({
            name: '',
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
                <div className="toast-header rounded">
                    <strong className="me-auto text-primary">Next Blog</strong>
                    <small>Just Now</small>
                    <button type="button" onClick={hideTost} className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="toast-body rounded">
                    {message}<br />
                    You will be redirected to login page in a second.
                </div>

            </div>}

            <div className="container w-50 top-110 border border-primary rounded p-3">
                <h1 className="text-center text-uppercase text-primary fs-1">Create account</h1>


                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" value={formData.name} className="form-control" onChange={(e) => setFormData({
                        ...formData,
                        name: e.target.value
                    })} placeholder="" aria-describedby="helpId" />
                    <small id="helpId" className="text-muted">Blog title</small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Mail</label>
                    <input type="email" value={formData.email} className="form-control" onChange={(e) => setFormData({
                        ...formData,
                        email: e.target.value
                    })} placeholder="" aria-describedby="helpId" />
                    <small id="helpId" className="text-muted">Email</small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Set password</label>
                    <input type="password" value={formData.password} className="form-control" onChange={(e) => setFormData({
                        ...formData,
                        password: e.target.value
                    })} placeholder="" aria-describedby="helpId" />
                    <small id="helpId" className="text-muted">Password</small>
                </div>



                <button onClick={onFormSubmit} className=" btn btn-primary">
                    {
                        isLoading ? 'Loading...' : 'Register'
                    }
                </button>

            </div>

        </>
    )
}

export default register
