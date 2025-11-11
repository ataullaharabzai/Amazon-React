import React, { useState } from 'react'
import { useLogin } from '../contexts/LoginContext'


function LoginForm() {

  const { setUser } = useLogin()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ firstName, lastName, email, country })
  }

  return (
    <>
      <div className='w-full min-h-70 flex justify-center items-center bg-gray-500'>
        <form onSubmit={handleSubmit}
          className='w-85 min-h-100 m-5 p-2 flex justify-center items-center flex-col gap-3 bg-gray-400 rounded-xl'>
          <h1 className='text-3xl font-semibold text-gray-800'>Log in </h1>

          <input
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700 focus:border-2 border-gray-800 hover:bg-gray-200'
            value={firstName}
            placeholder='First Name'
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700 focus:border-2 border-gray-800 hover:bg-gray-200'
            value={lastName}
            placeholder='Last Name'
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input type="email"
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700 focus:border-2 border-gray-800 hover:bg-gray-200'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="text"
            className='w-full h-10 bg-gray-300 px-2 rounded-sm focus:outline-none placeholder:text-sm placeholder:text-gray-700 focus:border-2 border-gray-800 hover:bg-gray-200'
            placeholder='Region'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type='submit'
            className='w-full h-10 rounded-sm text-gray-200 bg-gray-800 hover:border hover:border-amber-600 cursor-pointer'
          >Submit</button>
        </form>

      </div>

    </>
  )
}

export default LoginForm