import React, { useState } from 'react'
import { useLogin } from '../contexts/LoginContext'


function LoginForm() {

  const {setUser} = useLogin()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({firstName, lastName})
  }

  return (
    <>
      <div className='w-full min-h-70 flex justify-center items-center bg-gray-500'>
        <form onSubmit={handleSubmit}
          className='w-100 min-h-80 m-5 p-2 flex justify-center items-center flex-col gap-3 bg-gray-400 rounded-xl'>
          <h1 className='text-3xl font-semibold text-gray-800'>Log in </h1>

          <input
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700'
            value={firstName}
            placeholder='First Name'
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700'
            value={lastName}
            placeholder='Last Name'
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input type="email"
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700'
            placeholder='Email'
          />
        <button type='submit'>Submit</button>
        </form>

      </div>
      
    </>
  )
}

export default LoginForm