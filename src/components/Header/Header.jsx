import { SiJordan } from "react-icons/si";
import "./Header.css"
import CartWidgets from "../CartWidgets/CartWidgets";




export default function Header() {
  return (
        <header>
        <div className="container-fluid  ">
        <div className="row d-flex align-items-start justify-content-between">
          <div className="col-4 mt-4">
          <SiJordan size={50} color="white"/>
          </div>
          <div className="col-4 text-center mt-4">
            <h1 className="titulo">SHOHOKU STORE</h1>
          </div>
          <CartWidgets/>
        </div>
      </div>
      </header>
  )
}
