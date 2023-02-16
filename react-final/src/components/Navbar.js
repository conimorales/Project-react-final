import React from "react";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";

import Icon from './Cartwidget.js';

export const Navbar = () => {
  return (

    
    <div className="navbarv">


      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Icon/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/" >Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" >Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" >Carrito de Compras</Link>
            </li>
          </ul>
        </div>
      </nav>

  
    </div>
  );
};
