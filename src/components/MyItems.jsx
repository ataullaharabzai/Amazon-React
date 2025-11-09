import React, { useState } from 'react'
import { useCard } from '../contexts/CardContext'

function MyItems() {

  const { myItem } = useCard()

  if (myItem.length === 0) return <pre className='w-full min-h-100 flex justify-center items-center font-semibold text-3xl'>No items bought yet.
    Please buy something to store here.
  </pre>

  return (
    <div className='p-4 flex flex-wrap gap-4'>
      {myItem.map(item => (
        <div key={item.id} className='w-60 h-72 bg-gray-100 p-3 shadow-md flex flex-col items-center'>
          <p className='font-semibold'>{item.title}</p>
          <img className='w-42 h-52 object-contain rounded' src={item.img} alt={item.title} />
          <p>Price: ${item.price}</p>
          <p>Item Bought</p>
        </div>
      ))}
    </div>
  )
}

export default MyItems 