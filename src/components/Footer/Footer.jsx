import React, { useState } from "react";
import { FaInstagramSquare, FaTwitter, FaFacebook } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  // Función para manejar el cambio en el campo de email
  const handleEmailChange = (evento) => {
    setEmail(evento.target.value);
  };

  // Función para mostrar el toast cuando se ingrese el correo
  const handleEmailSubmit = (evento) => {
    evento.preventDefault();

    if (email && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      toast.success("¡Ahora recibirás las ofertas a tu correo!", {
        position: "top-center",
        autoClose: 3000,
      });
      setEmail(""); // Limpiar el campo de email después de enviar
    } else {
      toast.error("Por favor ingresa un correo válido.");
    }
  };

  return (
    <footer className="mt-5">
      <div className="container text-center mt-5">
        <div className="row align-items-center">
          <div className="col">
            <span className="me-3 fw-bold">Déjanos tu Email para recibir Ofertas:</span>
          </div>
          <div className="col">
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                className="form-control"
                placeholder="Escribí tu Mail"
                style={{ maxWidth: "300px" }}
                value={email}
                onChange={handleEmailChange}
                required
              />
            </form>
          </div>
          <div className="col">
            <p>¡Síguenos en nuestras redes!</p>
            <FaInstagramSquare />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </footer>
  );
}

