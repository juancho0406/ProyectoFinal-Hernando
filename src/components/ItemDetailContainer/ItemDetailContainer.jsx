import React from "react";

function ItemDetailContainer({ producto, volver }) {
  if (!producto) return null;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-3" style={{ maxWidth: "600px", width: "100%" }}>
        <img src={producto.img} alt={producto.nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
          <p className="card-text"><strong>Descripción:</strong> {producto.descripcion}</p>
          <button className="btn btn-danger mb-2  " onClick={volver}>Volver al listado</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;