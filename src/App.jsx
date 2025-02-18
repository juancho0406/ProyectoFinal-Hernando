import './App.css';



import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {



  return (
    <>
    
 <Header/>

 <Navbar/>
   
<ItemListContainer greetings="Bienvenido"/>

<Footer/>

</>
    
  )
}

export default App;
