import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [totalCarrito, setTotalCarrito] = useState(0);

  return (

    <BrowserRouter>
      <Header totalCarrito={totalCarrito} />
      <Navbar />
      <main>
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              setTotalCarrito={setTotalCarrito}
            />
          }
        />
        <Route
          path="/categoria/:categoria"
          element={
            <ItemListContainer
              greetings="Productos"
              setTotalCarrito={setTotalCarrito}
            />
          }
          
        />
        
        <Route
          path="/producto/:id"
          element={<ItemDetailContainer />}
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </main>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
