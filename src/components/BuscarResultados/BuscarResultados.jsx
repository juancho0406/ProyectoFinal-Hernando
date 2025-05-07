import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Item from "../Item/item";

export default function BuscarResultados() {
  const [resultados, setResultados] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  useEffect(() => {
    const buscarProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const todos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Filtrar por coincidencia de nombre
        const filtrados = todos.filter(p =>
          p.nombre.toLowerCase().includes(query)
        );
        setResultados(filtrados);
      } catch (error) {
        console.error("Error buscando productos:", error);
      }
    };

    buscarProductos();
  }, [query]);

  return (
    <div className="container mt-4">
      <h3>Resultados para: "{query}"</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
        {resultados.length > 0 ? (
          resultados.map(producto => (
            <Item key={producto.id} {...producto} verDetalle={() => {}} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}
