import React, { useState, useEffect } from "react";
import "./contador.css";

export default function Contador({ setTotalCarrito, setMostrarContador, setMostrarBoton }) {
  const [numero, cambiarNumero] = useState(1); // Inicia en 1 automáticamente

  useEffect(() => {
    setTotalCarrito((prev) => prev + 1); // Suma una unidad cuando aparece
  }, []);

  const modificarNumero = (operacion) => {
    if (operacion === "+") {
      cambiarNumero((prev) => prev + 1);
      setTotalCarrito((prev) => prev + 1);
    } else if (operacion === "-" && numero > 1) {
      cambiarNumero((prev) => prev - 1);
      setTotalCarrito((prev) => prev - 1);
    } else if (operacion === "-" && numero === 1) {
      cambiarNumero(0);
      setTotalCarrito((prev) => prev - 1);
      setMostrarContador(false);
      setMostrarBoton(true); // Vuelve a mostrar el botón "Agregar"
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 mt-3">
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
    </div>
  );
}
