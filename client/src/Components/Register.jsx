import React, { useState } from 'react'
import axiosInstance from '../api/axios'
import { Navigate } from 'react-router-dom'


const Register = (e) => {

 
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [password,setPassword]=useState('')

  
    const handleSubmit=async (e)=>{

        e.preventDefault();
       
        try {
          console.log('hiiiiiiiiiii');
           await axiosInstance.post('/register',{name,email,phonenumber,password}).then((res)=>{
                console.log(res.data.message,'registration happeninggg');
                
               
            }).catch((err)=>{
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }
   

  return (
    <div>
        <div>
        <h>register here..</h>
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <label>email</label> 
          <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input> 
          <label>phonenumber</label>
          <input type='number' name='phonenumber' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}></input>
          <label>password</label>
          <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       
       
            <button type='submit'>register</button>
           
        
         </form>
         </div>
    </div>
  )
}

export default Register