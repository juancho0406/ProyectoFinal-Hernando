import React, { useState } from "react";
import Contador from "../contador/contador";
import "./Item.css";
import { useCart } from "../../context/CartContext"; 

function Item({ nombre, precio, img, id, categoria, descripcion, verDetalle,  }) {
  const [mostrarContador, setMostrarContador] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  // Obtener la función addToCart desde el contexto
  const { addToCart } = useCart();

  const producto = {
    id,
    nombre,
    precio,
    img,
    categoria,
    descripcion,
  };

  const manejarAgregar = () => {
    // Llamamos a la función de agregar solo si el producto no está ya agregado
    addToCart(producto); 
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

          {verDetalle && (
            <button
              className="btn btn-danger mb-3 d-flex justify-content-center align-items-center"
              onClick={verDetalle}
            >
              Ver detalle
            </button>
          )}

          {mostrarBoton && (
            <button
              className="btn btn-danger mb-2 d-flex justify-content-center align-items-center"
              onClick={manejarAgregar} // Solo ejecutamos manejarAgregar aquí
            >
              Agregar
            </button>
          )}

          {mostrarContador && (
            <Contador
            producto={producto}
              setMostrarContador={setMostrarContador}
              setMostrarBoton={setMostrarBoton}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;

