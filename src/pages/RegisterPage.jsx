import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser =(e)=>{
    e.preventDefault();
    axios.post("/register",{
      name,
      email,
      password,
    });
  }

  return (
    <div className='mt-4 grow flex items-center justify-around '>
      <div className='mb-64'>

        <h1 className='text-3xl text-center mb-4  '>Register</h1>
        <form className='max-w-md mx-auto ' onSubmit={registerUser}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            placeholder='your name'
          />

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='your@email.com'
          />

          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='password'

          />
          <button className='primary'>Register</button>
          <div className=' text-center py-2 text-gray-500'>
            Are you allready a member? {' '}
            <Link
              to={'/login'}
              className='underline text-black'
            >Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage