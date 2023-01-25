import React from 'react'
import "./Noticas.css"

const alerta3 = () => {
    alert("Hola")
}



export default function Mando() {
    return (
        <div>
             <button class="filterMark4" onClick={alerta3}>Noticias</button>
        </div>
     );
}
