import "./Navbar.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      navigate(`/buscar?q=${encodeURIComponent(busqueda.trim())}`);
      setBusqueda(""); // Opcional: limpiar input después de buscar
    }
  };

 return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Inicio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/remeras">Remeras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/buzos">Buzos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid d-flex flex-row-reverse">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
