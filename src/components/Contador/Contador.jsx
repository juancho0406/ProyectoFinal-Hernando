import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";

function Contador({ producto, setMostrarContador, setMostrarBoton }) {
  const { addToCart, removeFromCart, carrito } = useCart();

  const productoEnCarrito = carrito.find((p) => p.id === producto.id);
  const cantidad = productoEnCarrito ? productoEnCarrito.cantidad : 0;

  const modificarNumero = (operacion) => {
    if (!producto) return;

    if (operacion === "sumar") {
      addToCart(producto);
    } else if (operacion === "restar") {
      removeFromCart(producto);
    }
  };

  useEffect(() => {
    if (cantidad === 0) {
      if (setMostrarContador) setMostrarContador(false);
      if (setMostrarBoton) setMostrarBoton(true);
    }
  }, [cantidad, setMostrarContador, setMostrarBoton]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-outline-danger me-2" onClick={() => modificarNumero("restar")}>
        -
      </button>
      <span>{cantidad}</span>
      <button className="btn btn-outline-danger ms-2" onClick={() => modificarNumero("sumar")}>
        +
      </button>
    </div>
  );
}

export default Contador;

