import React from 'react'
import "./App.css"
import './index.css'
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import PokeList from './components/Pokelist'
import Rotate from './components/Rotate'


export default function App() {
  return (
    <div>
      <div className='hidden' id="rotate">
      <Rotate/>
      </div>
      <Topbar/>
      <PokeList/>
      <Bottombar/>
    </div>
  )
}
