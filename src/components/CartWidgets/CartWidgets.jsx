import React from "react";

export default function CartWidgets({ totalCarrito }) {
  return (
    <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      style={{ fontSize: "0.75rem" }}
    >
      {totalCarrito} {/* Muestra el totalCarrito */}
      <span className="visually-hidden">productos en el carrito</span>
    </span>
  );
}
