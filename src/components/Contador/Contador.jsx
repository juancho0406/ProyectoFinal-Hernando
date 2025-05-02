import React, { useState } from "react";
import "./contador.css";

export default function Contador({ setTotalCarrito }) {
  const [numero, cambiarNumero] = useState(1);

  // Función para modificar el número en el contador
  const modificarNumero = (operacion) => {
    if (operacion === "+") {
      cambiarNumero((prev) => prev + 1);
      setTotalCarrito((prev) => prev + 1); // Actualizamos el total del carrito
    } else if (operacion === "-" && numero > 0) {
      cambiarNumero((prev) => prev - 1);
      setTotalCarrito((prev) => (prev > 0 ? prev - 1 : 0)); // Actualizamos el total del carrito, no puede ser menor que 0
    }
  };

  // Función para manejar el "Agregar" (vuelve a 1 al presionar)
  const handleAgregar = () => {
    cambiarNumero(1); // Reseteamos el contador a 1
    setTotalCarrito((prev) => prev + 1); // Añadimos 1 al carrito global
  };

  return (
    <div className="buttons d-flex align-items-center gap-2 mt-3">
      {numero > 0 ? (
        <>
          <button
            type="button"
            className="btn btn-danger mb-2"
            onClick={() => modificarNumero("-")}
          >
            -
          </button>
          <p className="m-0">{numero}</p>
          <button
            type="button"
            className="btn btn-danger mb-2"
            onClick={() => modificarNumero("+")}
          >
            +
          </button>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-danger mb-2"
          onClick={handleAgregar}
        >
          Agregar
        </button>
      )}
    </div>
  );
}
