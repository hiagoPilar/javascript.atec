import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings/Greeting.jsx'
import FavoriteFood from './components/FavoriteFood/FavoriteFood.jsx'
import FavoriteDrink from './components/FavoriteDrink/FavoriteDrink.jsx'

function App() {

  return (
    <>
      <p className="read-the-docs">
        Hello, World!
      </p>
      <Greeting />
      <FavoriteFood />
      <FavoriteDrink />
    </>
  )
}

export default App
