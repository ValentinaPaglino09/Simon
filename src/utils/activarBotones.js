export const activarBotones = (botones, setBotones, secuenciaBotones, setSecuenciaBotones) => {
    
    let ordenBotones = [...secuenciaBotones]
   
    const botonActivo = Math.ceil(Math.random() * (botones.length - 1) + 1)
    ordenBotones.push(botonActivo);
    console.log(ordenBotones);
    // ordenBotones.forEach(  botonActivo => {
    //         const botonesCopy = botones.map(boton => ({id: boton.id, color: boton.color, estaActivo: false}))
    //         const pos = botones.findIndex(boton => boton.id == botonActivo)
    //         botonesCopy[pos].estaActivo = true
    //         setBotones(botonesCopy)
    //        setTimeout(()=> {
    //         setBotones(botones.map(boton => ({id: boton.id, color: boton.color, estaActivo: false})))
    //        }, 2000)
      
    // })


    setSecuenciaBotones(ordenBotones)
    // let n = 0
    // const interval = setInterval(() => {
       
    // }, 2000)
    
    
    
}