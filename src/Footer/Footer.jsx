import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-full h-12 bg-gray-700 text-white flex justify-center items-center hover:bg-gray-600'>Back to Top</div>

      <div className='w-full min-h-90 bg-gray-800 text-white flex justify-around items-center p-5'>
        <ul>
          <p className='text-xl font-bold mb-3 text-gray-300'>Get to Know Us</p>
          <li>Carrer</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Amazon Devives</li>
        </ul>
        <ul>
          <p className='text-xl font-bold mb-3 text-gray-300'>Make Money with Us</p>
          <li>Sell products on Amazon</li>
          <li>Sell apps on Amazon</li>
          <li>Host an Amason Hub</li>
        </ul>
        <ul>
          <p className='text-xl font-bold mb-3 text-gray-300'>Amazon Payment Products</p>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload your Balance</li>
          <li>Amazon currency converter</li>
        </ul>
        <ul>
          <p className='text-xl font-bold mb-3 text-gray-300'>Let us Help you</p>
          <li>Your Account</li>
          <li>Your Order</li>
          <li>Return and Replacements</li>
          <li>Help</li>
        </ul>
      </div>
      <hr className='text-gray-300' />
      <div className='w-full bg-gray-800 text-white h-15 flex justify-center items-center text-3xl'>
        <h1>Amazon</h1>
      </div>
    </>
  )
}

export default Footer