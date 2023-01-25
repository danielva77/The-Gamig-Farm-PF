import React from 'react'
import "./Mando.css"

const alerta2 = () => {
    alert("Hola")
}

export default function Mando() {
    return (
        <div>
             <button class="filterMark3" onClick={alerta2}>Mandos</button>
        </div>
     );
}
