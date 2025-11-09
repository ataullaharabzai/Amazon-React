import React from 'react'
import { PhoneCall, Search, ShoppingCart } from 'react-feather'
import Cards from './Cards'

function Home() {
  return (
    <>
      <div className=''>
        <img src="	https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg" alt="Amazon Background" />
      </div>
      <div>
        <Cards />
      </div>
    </>
  )
}

export default Home