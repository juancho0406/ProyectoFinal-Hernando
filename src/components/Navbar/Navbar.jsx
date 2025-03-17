import "./Navbar.css"
import { productos } from "../../productos"
import React, { useState } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";



export default function Navbar() {

  const [MisProductos, setMisProductos] = useState(productos)

  const usarfiltro = (filtro) => {
    switch (filtro) {
      case "inicio":
        setMisProductos(productos) 
        
        break;
      case "remeras":
        setMisProductos(productos.filter(el.categoria === "remeras")) 
        break;
      case "pantalones":
        setMisProductos(productos.filter(el.categoria === "pantalones")) 
        break;
      case "zapatillas":
        setMisProductos(productos.filter(el.categoria === "zapatillas"))
        break;
      default:
        break;
    };

    return (
      <div>
        <Navbar usarfiltro={usarfiltro} /> {/* Pasamos la función como prop */}
        <ItemListContainer productos={MisProductos} /> {/* Pasamos los productos filtrados como prop */}
      </div>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => usarfiltro("inicio")}>Inicio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => usarfiltro("remeras")}>Remeras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => usarfiltro("pantalones")}>Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => usarfiltro("zapatillas")}>Zapatillas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid d-flex flex-row-reverse">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
