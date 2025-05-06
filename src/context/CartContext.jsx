import React, { createContext, useContext, useState, useEffect  } from "react";

const CartContext = createContext();


export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  

  const addToCart = (producto) => {
    setCarrito((prevCarrito) => {
      const existente = prevCarrito.find((p) => p.id === producto.id);

      if (existente) {
        // Si el producto ya existe, aumentamos la cantidad
        return prevCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        // Si el producto no existe, lo agregamos al carrito con cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  useEffect(() => {
    // Cargar carrito desde localStorage al iniciar la app
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito]);

  const removeFromCart = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((p) => p.id === producto.id);
      if (!productoExistente) return prevCarrito;

      if (productoExistente.cantidad === 1) {
        return prevCarrito.filter((p) => p.id !== producto.id);
      }

      return prevCarrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad - 1 } : p
      );
    });
  };
  const clearCart = () => {
    setCarrito([]);
  };

  // Calcular el total de productos (multiplicando el precio por la cantidad)
  const totalCarrito = carrito.reduce(
    (acc, producto) => acc + producto.cantidad, // Contamos la cantidad de productos
    0
  );

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart, totalCarrito, clearCart  }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
