import "./ItemListContainer.css";
import Item from "../Item/item";
import { productos } from "../../productos";
import { useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


export default function ItemListContainer({ greetings, setTotalCarrito }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <>
      <h1 className="greetings">{greetings}</h1>

      {productoSeleccionado ? (
        <ItemDetailContainer
          producto={productoSeleccionado}
          volver={() => setProductoSeleccionado(null)}
        />
      ) : (
        <div className="row row-cols-1  row-cols-md-2 g-4 mt-2 ">
          {productos.map((el) => (
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