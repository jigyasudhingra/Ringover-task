import React from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Screen/Home'
import Journey from './Components/Screen/Journey'
import Team from './Components/Screen/Team'
import Store from './Components/Screen/Store'
import Contact from './Components/Screen/Contact'
import Product from './Components/Screen/Product'
import NavigationMenu from './Components/NavigationMenu'

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/team" element={<Team />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
