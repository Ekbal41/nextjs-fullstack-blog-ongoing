import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"


export const addpost = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')



  const [post, setPost] = useState({
    title: '',
    content: '',
  })
  const hideTost = () => {
    setMessage('')

  }
  const onPostSubmitx = () => {
    
    axios.post('/api/addpost?id=' + process.env.NEXT_PUBLIC_KEY, post)
      .then(res => {
        setMessage(res.data.message)
       
      })
      .catch(err => { })
    setPost({
      title: '',
      content: '',
    })

  }

  const onPostSubmit = () => {
   
    axios.post('/api/addpost?id=' + process.env.NEXT_PUBLIC_KEY, post)
      .then(res => {
        setMessage(res.data.message)
        setTimeout(() => {
          router.push('/')
        }, 1000)
      })
      .catch(err => { })
    setPost({
      title: '',
      content: '',
    })
  }


  return (
    <>
      {message && <div className="toast show border border-primary rounded" role="alert" aria-live="assertive" aria-atomic="true"
        style={{ position: 'absolute', top: '100px', right: '20px' }}
      >
        <div className="toast-header rounded">
          <strong className="me-auto text-primary">Next Blog</strong>
          <small>Just Now</small>
          <button type="button" onClick={hideTost} class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="toast-body rounded">
          {message}<br />
          
        </div>

      </div>}
      <div className="container top-110">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item ">
            <Link href="addpost">
              Create New Post
            </Link>
          </li>
        </ol>

      </div>
      <div className="container w-75  border border-primary rounded p-3">
        {/* <h1 className="text-center text-uppercase text-primary fs-1">Add Post</h1> */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" value={post.title} id="" className="form-control" onChange={(e) => setPost({
            ...post,
            title: e.target.value
          })} placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted">Blog title</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Blog body</label>
          <textarea type="text" value={post.content} onChange={(e) => setPost({
            ...post,
            content: e.target.value
          })} id="" rows="6" className="form-control" placeholder="" aria-describedby="helpId" />
        </div>
        <button onClick={onPostSubmit} className=" btn btn-primary ">Save</button>
        <button onClick={onPostSubmitx} className=" btn btn-primary mx-4">Save and Add another</button>


      </div>
    </>
  )
}

export default addpost
