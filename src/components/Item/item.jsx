import React, { useState } from "react";
import Contador from "../contador/contador";
import "./Item.css";

function Item({ nombre, precio, img, setTotalCarrito, verDetalle }) {
  const [mostrarContador, setMostrarContador] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const manejarAgregar = () => {
    setMostrarContador(true);
    setMostrarBoton(false);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} alt={nombre} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: ${precio}</p>

          {/* Botón "Ver detalle" */}
          {verDetalle && (
            <button className="btn btn-danger mb-2" onClick={verDetalle}>
              Ver detalle
            </button>
          )}

          {/* Botón "Agregar" */}
          {mostrarBoton && (
            <button className="btn btn-danger mb-2" onClick={manejarAgregar}>
              Agregar
            </button>
          )}

          {/* Contador */}
          {mostrarContador && <Contador setTotalCarrito={setTotalCarrito} />}
        </div>
      </div>
    </div>
  );
}

export default Item;
