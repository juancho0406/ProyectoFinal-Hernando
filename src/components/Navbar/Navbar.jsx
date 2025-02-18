import "./Navbar.css"


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Inicio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Remeras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pantalones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Zapatillas</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container-fluid d-flex flex-row-reverse">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}
