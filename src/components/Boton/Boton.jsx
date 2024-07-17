import React from 'react'
import style from './Boton.module.css'

const Boton = ({botonId, botonActivo, botonColor, activarBoton}) => {
  return (
    <button  className={style.boton} style={{backgroundColor: botonColor, opacity: botonActivo ? 1 : 0.5, border: botonActivo ? "solid 2px black" : "none", boxShadow: botonActivo ? "1px 2px 2px" : 'none'}} onClick={(e) => activarBoton(e, botonId)}></button>
  )
}

export default Boton