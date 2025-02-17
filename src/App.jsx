import './App.css';

import Swal from "sweetalert2";
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/item';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {

  useEffect(() => {
    Swal.fire({
      title: "¡Bienvenido a Shohoku Store!",
      text: "Tu tienda favorita para todo lo relacionado con el baloncesto.",
      confirmButtonText: "Ir al Sitio",
    });
  }, []);

  return (
    <>
    
 <Header/>

 <Navbar/>
   
<div class="row row-cols-1 row-cols-md-2 g-4 mt-5">
  
   <Item/>
   <Item/>
   <Item/>
   <Item/>

</div>

<Footer/>

</>
    
  )
}

export default App;
