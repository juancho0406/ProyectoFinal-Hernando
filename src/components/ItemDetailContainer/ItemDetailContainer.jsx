import React, { useState } from "react";
import Contador from "../contador/contador";

function ItemDetailContainer({ producto, volver, setTotalCarrito }) {
  const [mostrarContador, setMostrarContador] = useState(false); // Para mostrar el contador

  if (!producto) return null;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card p-5" style={{ maxWidth: "600px", width: "100%" }}>
        <img
          src={producto.img}
          alt={producto.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">
            <strong>Precio:</strong> ${producto.precio}
          </p>
          <p className="card-text">
            <strong>Descripción:</strong> {producto.descripcion}
          </p>

          {/* Mostrar solo el botón "Agregar" si no se ha mostrado el contador */}
          {!mostrarContador ? (
            <button
              className="d-flex justify-content-center align-items-center btn btn-danger mb-2"
              onClick={() => setMostrarContador(true)}
            >
              Agregar
            </button>
          ) : (
            <Contador
              setTotalCarrito={setTotalCarrito}
              setMostrarContador={setMostrarContador}
            />
          )}

          <button className="btn btn-danger mt-3" onClick={volver}>
            Volver al listado
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
