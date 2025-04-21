import { SiJordan } from "react-icons/si";
import "./Header.css"
import CartWidgets from "../CartWidgets/CartWidgets";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";




export default function Header({ totalCarrito }) {
  return (
    <header>
      <div className="container-fluid px-0">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo a la izquierda */}
          <div className="ms-3">
            <SiJordan size={50} color="white" />
          </div>

          {/* Título centrado */}
          <div className="text-center flex-grow-1">
            <h1 className="titulo mb-0">SHOHOKU STORE</h1>
          </div>

          
          <div className="me-3 position-relative">
            <PiShoppingCartSimpleDuotone size={50} color="white" />
            <CartWidgets totalCarrito={totalCarrito}/>
            
          </div>
        </div>
      </div>
    </header>
  )
}
