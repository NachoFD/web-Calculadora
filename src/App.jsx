/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal"

import Calculadora from './componentes/Calculadora'

import './style.css'
import 'animate.css'
import { useState } from "react"

function App() {

  const [ animacion, setAnimacion ] = useState(false)
  const [ animacionError, setAnimacionError ] = useState(false)

  const mostrarAnimacion = () => {
    setAnimacionError(true)
  
    setTimeout(() => {
      setAnimacionError(false);
    }, 1000)
  }

  return (

    <div className="pantalla">

      <div className="animate__animated animate__zoomIn">
        <h1 className={ animacion ? 'animate__animated animate__pulse animate__infinite	infinite titulo' : 'titulo' } onMouseEnter={() => setAnimacion(true)} onMouseLeave={() => setAnimacion(false)}>Calculadora</h1>
      </div>


      <div className="animate__animated animate__zoomIn">
        <div className={ !animacionError ? '' : 'animate__animated animate__shakeX'}>
          <Calculadora error={mostrarAnimacion}/>
        </div>
      </div>

    </div>
    
  )
}

export default App

