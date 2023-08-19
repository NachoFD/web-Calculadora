/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal"

import Calculadora from './componentes/Calculadora'

import './style.css'
import 'animate.css'
import { useState } from "react"

function App() {

  const [ animacion, setAnimacion ] = useState(false)

  return (
    <div>
      <div style={{display: 'grid', placeItems: 'center'}}>
        <div className="animate__animated animate__zoomIn">
          <h1 className={ animacion ? 'animate__animated animate__pulse animate__infinite	infinite titulo' : 'titulo' } onMouseEnter={() => setAnimacion(true)} onMouseLeave={() => setAnimacion(false)}>Calculadora</h1>
        </div>
        <br />
        <div className="animate__animated animate__zoomIn">
          <Calculadora />
        </div>
      </div>
    </div>
  )
}

export default App

