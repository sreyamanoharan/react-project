import React from 'react'
import axiosInstance from '../api/axios'

const UserLogin = () => {

    const handleSubmit=()=>{
         axiosInstance.post('http://localhost:4000/userLogin')

    }

  return (


    <div>
     <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}></form>
        <div>
            <label>Email Address</label>
            <input type='email' name='email'></input>
        </div>
        <div>
            <label>Password</label>
            <input type='password' name='password'></input>
        </div>
        <div>
         <button type='submit'>login</button>
        </div>
     </div>

    </div>
  )
}

export default UserLogin