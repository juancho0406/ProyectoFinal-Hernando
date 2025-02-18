import "./Item.css"

 function Item({ nombre, precio}) {


 
  return (
    
    <div className="col">
    <div className="card">
      
      <div className="card-body mt-5">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: {precio}</p>
        <button type="button" className="btn btn-danger">Agregar</button>
      </div>
    </div>
  </div>
  )
}


export default Item