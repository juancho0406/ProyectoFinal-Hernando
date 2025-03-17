import "./ItemListContainer.css"
import Item from "../Item/item"
import { productos } from "../../productos"

export default function ItemListContainer({greetings})


{

  return (
    
    <>
 
    <h1 className="greetings">{greetings}</h1>
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
     {
      productos.map(el => {
        return(
          <Item key={el.id} nombre={el.nombre} precio={el.precio}/>
        )
      })
     }
    </div>
      </>
  )
}
