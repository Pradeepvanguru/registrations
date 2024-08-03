import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {


     const [formData,setFormData ]=useState(
      {
        email:"",
        password:""
      })
      const navigate=useNavigate()


     const handleChange=(e)=>{
      const{name,value}=e.target;
      // console.log(formData)
      setFormData(prev=>({
        ...prev,[name]:value
      }))
     }

    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(formData)
     axios.post("http://localhost:3006/login", formData) //collection name=std_datails
     .then(result => {
         console.log(result);  
         if(result.data==="Success"){
          alert("Login successfully..👍")
          navigate('/home')
         }
         else{
          alert("invalid crendentials...☹️🤧..please try again..")
         }
         
     })
     .catch(error => {
         console.error("Error posting data:", error);  
     });

    }
  return (
    <div className='bg-secondary  d-flex align-items-center justify-content-center vh-100'>
    <div className='bg-white p-4 rounded w-25'>
    <h1 className='p-4 d-flex align-items-center justify-content-center '>LOGIN</h1>

    <form onSubmit={handleSubmit}>

        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>
          <input onChange={handleChange} className='form-control rounded-0' type='email' placeholder='Enter email' name="email" required /> 
        </div>
        
        <div className='mb-3'>
          <label htmlFor="possword">
            <strong>Password</strong>
          </label>
          <input onChange={handleChange} placeholder='enter password' type='password' name="password" className='form-control rounded-0' required/>
        </div>
        <button className='btn btn-success w-100 rounded-4 mb-3'>Login</button>
            </form>

            <p className='align-items-center text-primary d-flex justify-content-center'>Don`t have an account?signup Here 👇</p>
            <Link to="/" className='btn btn-defult border w-100 bg-secondary text-white rounded-4 text-decoration-none'>Signup</Link>
    </div>
      
 </div>
  )
}

export default Login;