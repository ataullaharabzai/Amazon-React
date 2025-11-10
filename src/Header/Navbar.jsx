import React from 'react'
import { NavLink } from 'react-router-dom'
import { AlignCenter, Moon, Search, Sun, } from 'react-feather'

function Navbar() {
  return (
    <>
      <div className='w-full h-17 m-0 bg-gray-900 text-white flex justify-around items-center'>
        <div className=''>
          <h1 className='text-3xl ml-5'>Amazon</h1>
        </div>
        <div className='w-150 h-11 flex justify-between items-center '>
          <input type="text" placeholder='Search' className='w-full h-11 px-3 rounded-tl-sm rounded-bl-sm border border-amber-600 border-r-0 focus:outline-none' />
          <button className='hover:bg-amber-600 rounded-tr-sm rounded-br-sm h-11 w-15 flex justify-center items-center bg-amber-700 border border-amber-600 border-l-0 cursor-pointer'><Search /></button>
        </div>

        <ul className='w-110 h-20 flex justify-around items-center'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'rounded-full font-semibold py-2 px-6 bg-amber-600 text-black' : 'text-white'}>Home</NavLink></li>

          <li><NavLink to='/myItems' className={({ isActive }) => isActive ? 'rounded-full font-semibold py-2 px-6 bg-amber-600 text-black' : 'text-white'}>My Items</NavLink></li>

          <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'rounded-full font-semibold py-2 px-6 bg-amber-600 text-black' : 'text-white'}>Profile</NavLink></li>

          <li><NavLink to='/login' className={({ isActive }) => isActive ? 'rounded-full font-semibold py-2 px-6 bg-amber-600 text-black' : 'text-white'}>Log in</NavLink></li>

          <li><NavLink><Moon /></NavLink></li>
        </ul>
      </div>

      {/* Pannel */}
      <div className='bg-gray-800 text-white w-full h-10 flex'>
        <div className='w-180 flex justify-around items-center'>
          <div className='flex justify-between items-center gap-1'><AlignCenter /> All</div>
          <p className='hover:text-amber-500 cursor-pointer'>Today's Deals</p>
          <p className='hover:text-amber-500 cursor-pointer'>Prime Videos</p>
          <p className='hover:text-amber-500 cursor-pointer'>Registry</p>
          <p className='hover:text-amber-500 cursor-pointer'>Gift Cards</p>
          <p className='hover:text-amber-500 cursor-pointer'>Customer Service</p>
          <p className='hover:text-amber-500 cursor-pointer'>Sell</p>
        </div>
      </div>

    </>
  )
}

export default Navbar