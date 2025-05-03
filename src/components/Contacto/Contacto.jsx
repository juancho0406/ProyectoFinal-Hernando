import React from "react";
import "./contacto/contacto.css"

export default function Contacto() {
  return (
    <div className="container mt-5  d-flex flex-wrap justify-content-between align-items-start">
      <div className="contact-info" style={{ flex: "1 1 40%", minWidth: "100px" }}>
        <h2 className="contacto">Contacto</h2>
        <p><strong>Nombre:</strong> Shohoku Store</p>
        <p><strong>Dirección:</strong> Nazca 1763, Buenos Aires</p>
        <p><strong>Teléfono:</strong> +54 9 11 4582,7149</p>
        <p><strong>Email:</strong> contacto@Shohoku.com</p>
      </div>

      <div className="map" style={{ flex: "1 1 50%", minWidth: "500px", height: "500px" }}>
        <iframe
          title="Ubicación en Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9091971357754!2d-58.41730968477061!3d-34.60373458046079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1b7e0b88a3%3A0x9ba4be6f3e6c5c79!2sObelisco%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1618343888494!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}