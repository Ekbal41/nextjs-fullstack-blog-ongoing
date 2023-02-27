
import Link from "next/link"
import { useState } from "react"

export const addpost = () => {

  const [post, setPost] = useState({
    title: '',
    content: '',
  })

  const onPostSubmit = () => {
    console.log(post)
    setPost({
      title: '',
      content: '',
    })
  }


  return (
    <>
      <div className="container top-110">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item ">
            <Link  href="addpost">
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
        <button onClick={onPostSubmit} className=" btn btn-primary">Post</button>

      </div>
    </>
  )
}

export default addpost
