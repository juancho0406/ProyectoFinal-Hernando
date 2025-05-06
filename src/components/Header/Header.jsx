import React, { useState } from "react";
import { SiJordan } from "react-icons/si";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import CartModal from "../CartModal/CartModal";
import { useCart } from "../../context/CartContext"; // <-- IMPORTANTE
import "./Header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const { totalCarrito } = useCart(); // <-- OBTENEMOS el total dinámico desde el CONTEXTO

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <header>
      <div className="container-fluid px-0">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="ms-3">
            <SiJordan size={50} color="white" />
          </div>

          {/* Título */}
          <div className="text-center flex-grow-1">
            <h1 className="titulo mb-0">SHOHOKU STORE</h1>
          </div>

          {/* Carrito */}
          <div className="me-3 position-relative" onClick={openModal} style={{ cursor: "pointer" }}>
            <PiShoppingCartSimpleDuotone size={50} color="white" />
            <span
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "14px",
              }}
            >
              {totalCarrito}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CartModal show={showModal} onClose={closeModal} />
    </header>
  );
}
