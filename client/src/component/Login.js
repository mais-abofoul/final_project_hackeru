import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {useState} from 'react' //hook
import axios from 'axios'
import Footer from './Footer'

function Login() {
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [msg,setmsg]=useState('')
    const navigate=useNavigate()

    function LoginCheck(e){
        e.preventDefault()
        let data={
            email:email,
            password:password
        }
        axios.post('http://localhost:3001/login',data)
        .then(res=>{
            if(res.data=='1'){
                navigate('/posts')
            }else if(res.data=='0'){
                setmsg('invalid credentials')
            }
            else{
            setmsg("No user found! click in register")
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container mx-auto login'>
      <form onSubmit={(e)=>LoginCheck(e)} className='col-md-5  mx-auto'>
        <h5 className='p-3 text-center text-white'>{msg}</h5>
        <div>
     <h2 className='m-5' style={{textDecoration:'none', color:'#ac3b61'}}>Login into the blog  <img src="../../favicon.ico"/> </h2>
      </div>
  <div className="mb-3">
    <label style={{textDecoration:'none', color:'#123c69'}}  className="form-label">Email address</label>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  <div className="mb-3">
    <label style={{textDecoration:'none', color:'#123c69'}} className="form-label">Password</label>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
 <div className='text-center'>
  <Link style={{textDecoration:'none', color:'#ac3b61'}} to="/register" className='text-center'>👉 Not a member? Register here👈</Link>
  </div>

</form>
<Footer/>
    </div>

  )
}

export default Login
