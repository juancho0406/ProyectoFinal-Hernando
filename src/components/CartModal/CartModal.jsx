import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

function CartModal({ show, onClose }) {
  const { carrito, removeFromCart, addToCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    tarjeta: "",
    fechaVencimiento: "",
    clave: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "clave" && value.length > 4) {
      return; // No permite más de 4 dígitos
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { nombre, tarjeta, fechaVencimiento, clave } = formData;
    setIsFormValid(
      nombre && tarjeta.length === 16 && fechaVencimiento && clave.length === 4
    );
  };

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
              Carrito de Compras
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {carrito.length === 0 ? (
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

                {/* Formulario de pago */}
                <h5 className="mt-3">Detalles de pago</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre del titular
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="form-control"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      onBlur={validateForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tarjeta" className="form-label">
                      Número de tarjeta
                    </label>
                    <input
                      type="text"
                      id="tarjeta"
                      name="tarjeta"
                      className="form-control"
                      value={formData.tarjeta}
                      onChange={handleInputChange}
                      onBlur={validateForm}
                      maxLength="16"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fechaVencimiento" className="form-label">
                      Fecha de vencimiento
                    </label>
                    <input
                      type="text"
                      id="fechaVencimiento"
                      name="fechaVencimiento"
                      className="form-control"
                      value={formData.fechaVencimiento}
                      onChange={handleInputChange}
                      onBlur={validateForm}
                      maxLength="5"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="clave" className="form-label">
                      Clave de seguridad
                    </label>
                    <input
                      type="text"
                      id="clave"
                      name="clave"
                      className="form-control"
                      value={formData.clave}
                      onChange={handleInputChange}
                      onBlur={validateForm}
                      maxLength="4"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={clearCart}
                    >
                      Vaciar carrito
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger me-2"
                      disabled={!isFormValid}
                    >
                      Pagar
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger me-2"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
