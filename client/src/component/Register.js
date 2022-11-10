import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'

function Register() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  //------------

  function Register(e){
    let data={
      email:email,
      password:password
    }

    axios.post('http://localhost:3001/register',data)
    .then(res=>{
      if(res){
        alert('Successfully Registered Now click on login')
      }else{
        alert('Something went wrong')
      }
    })
    .catch(err=>console.log(err))
  }

// end of function Register

  return (
    <div className='container'>
       <div className='container mx-auto'>
     
          <form onSubmit={(e)=>Register(e)} className='col-md-5  mx-auto'>

            <h2 className='m-5' style={{textDecoration:'none', color:'#ac3b61'}}>Register into MERN Project</h2>
            <div className="mb-3">
              <label style={{textDecoration:'none', color:'#123c69'}} className="form-label">Email address</label>
              <input  
              onChange={(e)=>{setEmail(e.target.value)}} 
              type="email" 
              value={email} 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>


            <div className="mb-3">
              <label style={{textDecoration:'none', color:'#123c69'}}  className="form-label">Password</label>
              <input  
              onChange={(e)=>{setPassword(e.target.value)}} 
              type="password" 
              value={password} 
              className="form-control" 
              id="exampleInputPassword1" 
              required/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <Footer/>
            <div className='text-center'>
              <Link style={{textDecoration:'none', color:'#ac3b61'}} to="/" className='text-center'>👉 Already a member? Login here👈</Link>
            </div>

          </form>
        </div>
    </div>
  )
}

export default Register
