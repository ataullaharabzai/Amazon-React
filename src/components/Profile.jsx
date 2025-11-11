import React from 'react'
import { useLogin } from '../contexts/LoginContext'
import { useCard } from '../contexts/CardContext'

function Profile() {

  const { user } = useLogin()
  const { myItem } = useCard()

  return (
    <div className='w-full min-h-100 bg-gray-400 flex justify-around items-center'>
      <div className='w-150 min-h-80 p-4'>
        <h1 className='text-gray-800 font-bold text-5xl'>Welcome</h1>
        <h1 className='text-2xl text-amber-700 font-semibold'>{user.firstName} {user.lastName}</h1>
        <h1>{user.email}</h1>
        <h1>{user.country}</h1>
        <p className='text-gray-800 mt-8'>
          We are happy to see you in our production, you can see and check your shopping items in 'My Items' section, Any time you welcome, Enjoy your shopping
        </p>
        <div className='mt-10 text-2xl'>
          <p>Total items bought: {myItem.length}</p>
        </div>
      </div>
      <div className='border-amber-600 border-4 rounded-full bg-gray-900'>
        <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="User Profile" />
      </div>
    </div>
  )
}

export default Profile