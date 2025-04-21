import React, { useState } from "react";
import Contador from "../contador/contador";
import "./Item.css";

function Item({ nombre, precio, setTotalCarrito }) {
  
  // estados
  const [mostrarContador, setMostrarContador] = useState(false);

  const [mostrarBoton, setMostrarBoton] = useState(true); 

  //funciones
  const manejarAgregar = () => {
    setMostrarContador(true); 
    setMostrarBoton(false);   
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-body mt-5">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: {precio}</p>
        </div>
      </div>

      {/* Solo mostramos el botón "Agregar" si mostrarBoton es true */}
      {mostrarBoton && (
        <button type="button" className="btn btn-danger" onClick={manejarAgregar}>
          Agregar
        </button>
      )}

      {/* Mostrar el contador solo si mostrarContador es true */}
      {mostrarContador && <Contador setTotalCarrito={setTotalCarrito}/>}
    </div>
  );
}

export default Item;

