import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'


function AddPost() {
    const [title,settitle]=useState('')
    const [auth,setauth]=useState('')
    const [desc, setdesc]=useState('')
    const [msg, setmsg]= useState('')


    //-----------
    function handleSubmit(e){
        e.preventDefault()
        let blog={
            title:title,
            desc:desc,
            auth:auth
        }
        axios.post('http://localhost:3001/add-post',blog)
        .then(res=>setmsg(res.data))
        .catch(err=>console.log(err))

    }
    // ---end of function handleSubmit

  return (
    <div>
      <Navbar/>
      <div className='container mt-5'>
        <form  className='col-md-5  mx-auto addpost' onSubmit={(e)=>handleSubmit(e)}>
            <h5 className='p-3 text-center text-white'>{msg}</h5>
            <h2 className='m-5' style={{textDecoration:'none', color:'#ac3b61'}}>Add post into website</h2>


            <div className="mb-3">
                <label style={{textDecoration:'none', color:'#123c69'}}  className="form-label">Title</label>
                <input 
                onChange={(e)=>{settitle(e.target.value)}} 
                value={title}
                type="text" className="form-control" id="exampleInputEmail1" 
                aria-describedby="emailHelp" required/>
            </div>


            <div className="mb-3">
                <label style={{textDecoration:'none', color:'#123c69'}} className="form-label">Descreption</label>
                <textarea 
                onChange={(e)=>{setdesc(e.target.value)}} 
                value={desc} 
                type="text" 
                rows='8'
                className="form-control" 
                id="exampleInputPassword1" required/>
            </div>

            <div className="mb-3">
                    <label style={{textDecoration:'none', color:'#123c69'}} className="form-label">Author Name</label>
                    <input 
                    onChange={(e)=>{setauth(e.target.value)}} 
                    value={auth} 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    required/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/posts' className='btn btn-dark m-4'>back to home</Link>

        </form>
    </div>
    <Footer/>
</div>
      
  )
}

export default AddPost
