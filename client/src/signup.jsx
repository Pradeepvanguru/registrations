import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function Signup() {


     const [formData,setFormData ]=useState(
      {
        username:"",
        email:"",
        password:""
      })


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
     axios.post("http://localhost:3006/Std_details", formData) //collection name=std_datails
     .then(response => {
         console.log("posted");  
         
     })
     .catch(error => {
         console.error("Error posting data:", error);  
     });

    }
  return (
    <div className='bg-secondary  d-flex align-items-center justify-content-center vh-100'>
    <div className='bg-white p-4 rounded w-25'>
    <h1>Register</h1>

    <form onSubmit={handleSubmit}>

        <div className='mb-3'>
          <label htmlFor='name'>
            <strong>Name</strong>
          </label>
          <input onChange={handleChange} className='form-control rounded-0' type='name' autoComplete='' placeholder='Enter Name' name="username" />
        </div>

        <div className='mb-3'>
          <label htmlFor='email'>
            <strong>Email</strong>
          </label>
          <input onChange={handleChange} className='form-control rounded-0' type='email' placeholder='Enter email' name="email"  /> 
        </div>
        
        <div className='mb-3'>
          <label htmlFor="possword">
            <strong>Password</strong>
          </label>
          <input onChange={handleChange} placeholder='enter password' type='password' name="password" className='form-control rounded-0'/>
        </div>

            <button className='btn btn-success w-100 rounded-0 mb-3'>Register</button>
            </form>
            <p className='align-items-center text-primary'>Already have an account?</p>
            <Link to="/login" className='btn btn-defult border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
   

    </div>
      
 </div>
  )
}

export default Signup;