import React, { useState, useEffect } from "react";
import Contador from "../contador/contador.jsx";
import { useCart } from "../../context/CartContext"; // IMPORTANTE

function ItemDetailContainer({ producto, volver }) {
  const [productoDetail, setProductoDetail] = useState(null);
  const [mostrarContador, setMostrarContador] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const { addToCart, carrito } = useCart(); // usar carrito

  useEffect(() => {
    if (producto) {
      setProductoDetail(producto);
    } else {
      console.error("Producto no encontrado en ItemDetailContainer");
    }
  }, [producto]);

  // Usamos useEffect para actualizar el estado al cargar el producto
  useEffect(() => {
    if (producto) {
      setProductoDetail(producto);
    } else {
      console.error("Producto no encontrado en ItemDetailContainer");
    }
  }, [producto]);

  // Este efecto se dispara cuando cambia el carrito o el producto
  useEffect(() => {
    if (productoDetail) {
      const productoEnCarrito = carrito.find((p) => p.id === productoDetail.id);
      if (productoEnCarrito) {
        setMostrarContador(true);
        setMostrarBoton(false);
      } else {
        setMostrarContador(false);
        setMostrarBoton(true);
      }
    }
  }, [carrito, productoDetail]);

  if (!productoDetail) {
    return <p>Cargando...</p>;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card p-5" style={{ maxWidth: "600px", width: "100%" }}>
        <img
          src={productoDetail.img}
          alt={productoDetail.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{productoDetail.nombre}</h5>
          <p className="card-text">
            <strong>Precio:</strong> ${productoDetail.precio}
          </p>
          <p className="card-text">
            <strong>Descripción:</strong> {productoDetail.descripcion}
          </p>

          {mostrarBoton && (
            <button
              className="btn btn-danger mt-3"
              onClick={() => {
                addToCart(productoDetail);
                setMostrarContador(true);
                setMostrarBoton(false);
              }}
            >
              Agregar
            </button>
          )}

          {mostrarContador && (
            <Contador
              producto={productoDetail}
              setMostrarContador={setMostrarContador}
              setMostrarBoton={setMostrarBoton}
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

