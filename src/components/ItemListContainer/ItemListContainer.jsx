import "./ItemListContainer.css";
import Item from "../Item/item";
import { useState, useEffect } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useLocation, useParams } from "react-router-dom";

// Firebase
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { categoria } = useParams();
  const location = useLocation();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");

        // Si hay categoría en la URL, filtramos por ella
        const consulta = categoria
          ? query(productosRef, where("categoria", "==", categoria.toLowerCase()))
          : productosRef;

        const respuesta = await getDocs(consulta);
        const productosObtenidos = respuesta.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosObtenidos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

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
        />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
          {productos.map((el) => (
            <Item
              key={el.id}
              {...el}
              verDetalle={() => setProductoSeleccionado(el)}
            />
          ))}
        </div>
      )}
    </>
  );
}
