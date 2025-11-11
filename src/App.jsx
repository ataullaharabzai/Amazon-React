import React, { useState } from 'react'
import Navbar from './Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import { CardProvider } from './contexts/CardContext'
import CardData from './Data/Cards.json'

import cloths from './assets/cloths.jpg'
import cooker from './assets/cooker.jpg'
import electronics from './assets/electronics.jpg'
import fashion from './assets/fashion.jpg'
import makeup from './assets/makeup.jpg'
import shoes from './assets/shoes.jpg'
import smartWatch from './assets/smartWatch.jpg'
import sofa from './assets/sofa.jpg'
import { LoginProvider } from './contexts/LoginContext'

const images = {
  'cloths.jpg': cloths,
  'cooker.jpg': cooker,
  'electronics.jpg': electronics,
  'fashion.jpg': fashion,
  'makeup.jpg': makeup,
  'shoes.jpg': shoes,
  'smartWatch.jpg': smartWatch,
  'sofa.jpg': sofa,
}

function App() {
  const [cards, setCards] = useState(
    CardData.map(item => ({ ...item, img: images[item.img] }))
  )

  const [myItem, setMyItem] = useState([])

  const buyItems = (item) => {
    setMyItem(prev => [...prev, item])
  }

  const addCard = (item) => {
    setCards((prev) => [...prev, { id: Date.now(), ...item }])
  }

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <LoginProvider>
      <CardProvider value={{ cardItem: cards, addCard, deleteCard, buyItems, myItem }}>
        <Navbar />
        <Outlet />
        <Footer />
      </CardProvider>
    </LoginProvider>
  )
}

export default App