import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Footer from './Footer'

function Post() {
    const [post, setpost]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/posts')
        .then(res=>setpost(res.data))
        .catch(err=>console.log(err))
    })

   
  return (
    <div>
      <Navbar/>
      <h1 className='text-center p-2 posts_heading'> HEY! CHECK OUT THIS POSTS</h1>
      {
        post.map((data, key)=>{
            return(
            <div className='container'>
                <h2>{data.title}</h2>
                <span className='badge badge-info'>{data.auth}</span>
                <h6 className='text-black mt-4'>{data.desc}</h6>
                <hr style={{border:'1px dotted black'}}/>
            </div>
           
    
            )
        })
      }
      <Footer/>
    </div>
  )
}

export default Post
