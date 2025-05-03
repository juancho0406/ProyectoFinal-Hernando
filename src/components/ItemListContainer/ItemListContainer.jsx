import "./ItemListContainer.css";
import Item from "../Item/item";
import { productos } from "../../productos";
import { useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import {useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";


export default function ItemListContainer({ greetings, setTotalCarrito }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { categoria } = useParams()

  const productosFiltrados = categoria
  ? productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase())
  : productos;

  const location = useLocation();

  useEffect(() => {
    // Cada vez que cambia la ruta, volvemos al listado
    setProductoSeleccionado(null);
  }, [location.pathname]);
  return (
    <>

      {productoSeleccionado ? (
        <ItemDetailContainer
          producto={productoSeleccionado}
          volver={() => setProductoSeleccionado(null)}
          setTotalCarrito={setTotalCarrito}
        />
      ) : (
<div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
  {productosFiltrados.map((el) => (
    <Item
      key={el.id}
      {...el}
      setTotalCarrito={setTotalCarrito}
      verDetalle={() => setProductoSeleccionado(el)}
    />
  ))}
</div>
      )}
    </>
  );
}