export const activarBotones = async (botones, setBotones, secuenciaBotones, setSecuenciaBotones) => {
    
    let ordenBotones = [...secuenciaBotones]
   
    const botonActivo = Math.ceil(Math.random() * (botones.length))
    ordenBotones.push(botonActivo);
    console.log(ordenBotones);


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
        for (const botonActivo of ordenBotones) {
            const botonesCopy = botones.map(boton => ({id: boton.id, color: boton.color, estaActivo: false}))
            const pos = botones.findIndex(boton => boton.id == botonActivo)
            botonesCopy[pos].estaActivo = true
            setBotones(botonesCopy)
            await delay(1000);
            setBotones(botones.map(boton => ({id: boton.id, color: boton.color, estaActivo: false})))
            await delay(1000);
        }
    
    setSecuenciaBotones(ordenBotones)
   
    
    
}