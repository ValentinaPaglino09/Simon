import React, { useEffect, useState } from 'react'
import style from './Juego.module.css'
import { botonesData } from '../../assets/botones'
import Boton from '../Boton/Boton'
import { activarBotones } from '../../utils/activarBotones'
import { compararBotones } from '../../utils/compararBotones'

const Juego = () => {

const [botones, setBotones] = useState(botonesData)
const [secuenciaBotones, setSecuenciaBotones] = useState([])
const [index, setIndex] = useState(1)
const [nroLuces, setNroLuces] = useState(1)

const activarBoton = (e, idBoton) => {
  e.preventDefault()
  if(compararBotones(idBoton, secuenciaBotones, index)) {
    if (index === nroLuces) {
        setNroLuces(nroLuces + 1)
        setIndex(1)
    }
    else setIndex(index + 1)
    
  }
  else alert("Perdiste!!!!")
  
}


const delay = () => {

}

useEffect(() => {
    activarBotones(botones, setBotones, secuenciaBotones, setSecuenciaBotones)
   
    
},[nroLuces])

console.log(nroLuces);
console.log(index);
console.log(secuenciaBotones);

  return (
    <div className={style.container}>{botones.map(boton => <Boton key={boton.id} botonId={boton.id} botonActivo={boton.estaActivo} botonColor={boton.color} activarBoton={activarBoton}/>)}</div>
  )
}

export default Juego