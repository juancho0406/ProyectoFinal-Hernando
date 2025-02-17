import { SiJordan } from "react-icons/si";

import CartWidgets from "../CartWidgets/CartWidgets";




export default function Header() {
  return (
        <header>
        <div class="container-fluid  ">
        <div class="row d-flex align-items-start justify-content-between">
          <div class="col-4 mt-4">
          <SiJordan size={50} color="white"/>
          </div>
          <div class="col-4 text-center mt-4">
            <h1 class="titulo">SHOHOKU STORE</h1>
          </div>
          <CartWidgets/>
        </div>
      </div>
      </header>
  )
}
