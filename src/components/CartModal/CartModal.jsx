import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Checkout from "../Checkout/Checkout";

function CartModal({ show, onClose }) {
  const { carrito, removeFromCart, addToCart, clearCart } = useCart();
  const [mostrarCheckout, setMostrarCheckout] = useState(false);

  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden={!show}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">
              {mostrarCheckout ? "Finalizar Compra" : "Carrito de Compras"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {mostrarCheckout ? (
              <Checkout onVolver={() => setMostrarCheckout(false)} />
            ) : carrito.length === 0 ? (
              <p>No tienes productos en el carrito.</p>
            ) : (
              <>
                <ul className="list-group">
                  {carrito.map((producto) => (
                    <li key={producto.id} className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <span>{producto.nombre}</span>
                        <span>
                          {producto.cantidad} x ${producto.precio}
                        </span>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <button
                          className="btn btn-outline-danger me-2"
                          onClick={() => removeFromCart(producto)}
                        >
                          -
                        </button>
                        <span className="me-2">{producto.cantidad}</span>
                        <button
                          className="btn btn-outline-danger me-2"
                          onClick={() => addToCart(producto)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <hr />
                <h5>Total: ${total}</h5>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={clearCart}
                  >
                    Vaciar carrito
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setMostrarCheckout(true)}
                  >
                    Pagar
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="modal-footer">
            {!mostrarCheckout && (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={onClose}
              >
                Cerrar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
