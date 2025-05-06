import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartWidget() {
  const { totalCarrito } = useCart();

  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.75rem" }}>
      {totalCarrito}
      <span className="visually-hidden">productos en el carrito</span>
    </span>
  );
}
