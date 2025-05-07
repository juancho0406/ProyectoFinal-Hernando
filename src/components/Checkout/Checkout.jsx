import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ onVolver }) => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tarjeta: "",
    vencimiento: "",
    cvv: "",
  });

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    
    // Validación de tarjeta
    const tarjetaValida = /^\d{16}$/.test(userInfo.tarjeta);
    const vencimientoValido = /^\d{2}\/\d{2}$/.test(userInfo.vencimiento);
    const cvvValido = /^\d{3}$/.test(userInfo.cvv);

    if (!tarjetaValida || !vencimientoValido || !cvvValido) {
      toast.error("Por favor ingresa los datos de la tarjeta correctamente.");
      return;
    }

    console.log("Datos enviados:", userInfo);

    // Mostrar el toast de agradecimiento
    toast.success("¡Muchas gracias por tu compra!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Acá podrías limpiar los campos o redirigir si querés
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Finalizar Compra
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Nombre"
          name="nombre"
          value={userInfo.nombre}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={userInfo.email}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          label="Teléfono"
          name="telefono"
          type="tel"
          value={userInfo.telefono}
          onChange={handleInputChange}
          required
          fullWidth
        />

        {/* Campos de tarjeta */}
        <TextField
          label="Número de Tarjeta (16 dígitos)"
          name="tarjeta"
          type="text"
          value={userInfo.tarjeta}
          onChange={handleInputChange}
          required
          fullWidth
          inputProps={{ maxLength: 16 }}
        />

        <TextField
          label="Fecha de Vencimiento (MM/AA)"
          name="vencimiento"
          type="text"
          value={userInfo.vencimiento}
          onChange={handleInputChange}
          required
          fullWidth
          inputProps={{ maxLength: 5 }}
        />

        <TextField
          label="Clave de Seguridad (CVV)"
          name="cvv"
          type="text"
          value={userInfo.cvv}
          onChange={handleInputChange}
          required
          fullWidth
          inputProps={{ maxLength: 3 }}
        />

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={onVolver}>
            Volver al carrito
          </Button>
          <Button variant="contained" type="submit">
            Finalizar compra
          </Button>
        </Stack>
      </Stack>

      <ToastContainer />
    </Box>
  );
};

export default Checkout;
