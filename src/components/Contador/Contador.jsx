import React, { useState } from "react"
import "./contador.css"

export default function Contador() 
{
    const [numero, cambiarNumero] = useState(1);
    
  return (
    <div className="buttons">
    <button type="button" className="btn btn-danger" onClick={() => cambiarNumero (numero - 1 ) }>-</button>
    <p id="numero"> {numero} </p>
    <button type="button" className="btn btn-danger" onClick={() => cambiarNumero (numero + 1 )}>+</button>
    </div>
  )
}
