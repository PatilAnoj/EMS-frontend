import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='text-black outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter email'/>
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='text-black outline-none bg-transparent border-2 mt-2.5 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='password'/>
                <button className='text-white outline-none hover:bg-emerald-700 font-semibold w-full bg-emerald-600 py-2 mt-7 text-lg px-8 rounded-full'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login