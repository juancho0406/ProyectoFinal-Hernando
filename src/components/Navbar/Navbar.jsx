

export default function Navbar() {
  return (
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
            <a class="nav-link" href="#">Pantalones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Zapatillas</a>
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
  )
}
