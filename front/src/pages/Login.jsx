import React from 'react'
import { useState } from 'react';
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate=useNavigate()
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let submit=async (e)=>{
        e.preventDefault();
      let {data}= await axios.post("http://localhost:5000/login",{email,password});
      if (data.error) {
        toast.error(data.error)
      }
      else{
        toast.success(data.msg)
        setEmail("")
        setPassword("")
        navigate("/dash")
      }
    }
  return (
    <div className='flex justify-center items-center h-screen round '>
        <form onSubmit={submit} className='flex flex-col gap-y-1 justify-center bg-white rounded-sm shadow-lg h-fit w-1/4 py-2 px-7' >
            <label >Email</label>
            <input   className='outline-none bg-transparent border-black border-b-2' type="email" onChange={(e)=>setEmail(e.target.value)} />
            <label >Password</label>
            <input   className='outline-none bg-transparent border-black border-b-2' type="password" onChange={(e)=>setPassword(e.target.value)}  />
            <input className='bg-green-600 mt-5 text-white rounded-sm py-2 cursor-pointer' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Login