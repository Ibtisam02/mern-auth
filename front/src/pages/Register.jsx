import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
  
  let navigate=useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let submit=async (e)=>{
        e.preventDefault();
        try {
       let {data}= await axios.post("http://localhost:5000/register",{name,email,password})
       if (data.error) {
        toast.error(data.error)
       }
       else{
        setEmail("")
        setName("")
        setPassword("")
        navigate("/login")
       }
      } catch (error) {
        console.log("error ocured"+error)
      }
    }
  return (
    <div className='flex justify-center items-center h-screen round '>
        <form onSubmit={submit} className='flex flex-col gap-y-1 justify-center bg-white rounded-sm shadow-lg h-fit w-1/4 py-2 px-7' >
            <label >Name</label>
            <input className='outline-none bg-transparent border-black border-b-2' onChange={(e)=>setName(e.target.value)}  type="text" />
            <label >Email</label>
            <input  className='outline-none bg-transparent border-black border-b-2' onChange={(e)=>setEmail(e.target.value)} type="email" />
            <label >Password</label>
            <input  className='outline-none bg-transparent border-black border-b-2' onChange={(e)=>setPassword(e.target.value)} type="password"  />
            <input className='cursor-pointer bg-green-600 mt-5 text-white rounded-sm py-2' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Register