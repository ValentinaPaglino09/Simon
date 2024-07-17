import React, { useState } from 'react'
import style from './Juego.module.css'
import { botonesData } from '../../assets/botones'
import Boton from '../Boton/Boton'
import { activarBotones } from '../../utils/activarBotones'
import { compararBotones } from '../../utils/compararBotones'

const Juego = () => {

const [botones, setBotones] = useState(botonesData)
const [secuenciaBotones, setSecuenciaBotones] = useState([])
const [index, setIndex] = useState(1)



const activarBoton = (e, idBoton) => {

  e.preventDefault()
  if(compararBotones(idBoton, secuenciaBotones, index)) {
    if (index === secuenciaBotones.length) {
      activarBotones(botones, setBotones, secuenciaBotones, setSecuenciaBotones)
        setIndex(1)
    }
    else setIndex(index + 1)
    
  }
  else { 
    alert("Perdiste!!!!") 
    setSecuenciaBotones([])
    setIndex(1)
    activarBotones(botones, setBotones, [], setSecuenciaBotones)
  }
  
}



  return (
    <div className={style.container}>{botones.map(boton => <Boton key={boton.id} botonId={boton.id} botonActivo={boton.estaActivo} botonColor={boton.color} activarBoton={activarBoton}/>)}
    <button onClick={(e) => {
      e.preventDefault()
      activarBotones(botones, setBotones, secuenciaBotones, setSecuenciaBotones)
    }} className={style.empezar}>Empezar juego</button>
    </div>
  )
}

export default Juego