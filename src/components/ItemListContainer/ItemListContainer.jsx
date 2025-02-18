import "./ItemListContainer.css"
import Item from "../Item/item"

export default function ItemListContainer({greetings})

{
  return (
    
    <>
    <h1 className="greetings">{greetings}</h1>
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
      <Item nombre={"Remera Shohoku Titular"} precio={40000}/>
      <Item nombre={"Remera Shohoku Suplente"} precio={40000}/>
      <Item nombre={"Pantalon Shohoku Titular"} precio={40000}/>
      <Item nombre={"Zapatilla Shohoku Titular"} precio={40000}/>
    </div>
      </>
  )
}
