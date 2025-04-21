import React, { useState } from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';




function App() {

  const [totalCarrito, setTotalCarrito] = useState(0);

  return (
    <>
    
 <Header totalCarrito={totalCarrito}  />

 <Navbar/>
   
<ItemListContainer  greetings="Bienvenido" setTotalCarrito={setTotalCarrito}/>


<Footer/>

</>
    
  )
}

export default App;
