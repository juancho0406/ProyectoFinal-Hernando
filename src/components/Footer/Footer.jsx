import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-5">
<div className="container text-center mt-5 ">
  <div className="row align-items-center">
    <div className="col">
    <span className="me-3 fw-bold">Dejanos tu Email para recibir Ofertas:</span>
    </div>
    <div className="col">
    <input
              type="text"
              className="form-control"
              placeholder="Escribí tu mensaje"
              style={{ maxWidth: "300px" }}
            />
    </div>
    <div className="col">
      <p>Seguinos en nuestras redes!</p>
    <FaInstagramSquare />
    <FaXTwitter />
    <FaFacebook />
    
    </div>
  </div>
</div>
</footer>
  )
}

