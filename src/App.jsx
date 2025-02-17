import './App.css';
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { SiJordan } from "react-icons/si";




function App() {


  return (
    <>
    <header>
    <div class="container-fluid  ">
        <div class="row d-flex align-items-start justify-content-between">
          <div class="col-4 mt-4">
          <SiJordan size={50} color="white"/>
          </div>
          <div class="col-4 text-center mt-4">
            <h1 class="titulo">SHOHOKU STORE</h1>
          </div>
          <div class="col-4 d-flex justify-content-end mt-4">
          <PiShoppingCartSimpleDuotone size={50} color="white"/>
          </div>
        </div>
      </div>
    </header>
   
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Remeras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">pantalones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">zapatillas</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="container-fluid d-flex flex-row-reverse">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-dark" type="submit">Search</button>
    </form>
  </div>
</nav>

<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>


<footer>
<div class="footer">
  <p>Todos los derechos reservados</p>
  <p>Contacto </p>
  <p>Sobre nosotros</p>
  <p>Horarios</p>
</div>
</footer>


</>
    
  )
}

export default App;
