import React, { useState } from 'react'
import { useCard } from '../contexts/CardContext'


function Cards() {

  const { cardItem, buyItems } = useCard()
  const [clickedItems, setClickedItems] = useState([])

  const handleClick = (item) => {
    buyItems(item)
    setClickedItems(prev => [...prev, item.id])
  }

  return (
    <div className='w-full min-h-70 bg-gray-200'>
      <div className='flex justify-around items-center p-3 flex-wrap gap-2'>
        {cardItem.map((item) => (
          <div key={item.id} className='w-72 min-h-100 bg-gray-100 mb-4 shadow-md p-4'>
            <p className='text-3xl p-2 font-semibold'>{item.title}</p>
            <div>
              <img className='w-60 h-75 bg-white rounded-xl object-contain m-auto bg-cover bg-center'
                src={item.img}
                alt={item.title} />
            </div>
            <div className='w-full overflow-hidden flex justify-between items-center p-3'>
              <p className='p-2'>Price: ${item.price}</p>
              <button
                className={`p-2 text-white w-21 h-10 rounded-sm flex justify-center items-center cursor-pointer hover:bg-gray-600 ${clickedItems.includes(item.id) ? 'bg-gray-400' : 'bg-gray-800'}`}
                onClick={() => handleClick(item)}
                disabled={clickedItems.includes(item.id)}
                >
                {clickedItems.includes(item.id) ? 'Added' : 'Buy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards