import React from 'react'
import "./App.css"
import './index.css'
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import PokeList from './components/Pokelist'


export default function App() {
  return (
    <div>
      <Topbar/>
      <PokeList/>
      <Bottombar/>
    </div>
  )
}
