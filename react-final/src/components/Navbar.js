
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";

import { ShopContext } from "../context/Shop-context";

import React, { useContext } from "react";

import Icon from './Cartwidget.js';

export const Navbar = () => {

  const { getTotalCartAmount} = useContext(ShopContext);
  const totalCount = getTotalCartAmount()[1];

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
          </ul>
          <form class=" nav-item form-inline my-2 my-lg-0">
          {totalCount > 0 ? (

            
            <>
              <Link className="nav-link" to="/cart" ><i class="fa-solid fa-cart-shopping"></i>Compras 
              <div class="badge badge-primary text-wrap ml-2" >
              {totalCount} 
              </div>
              </Link>
            </>
              ) : ( <Link className="nav-link" to="/cart" ><i class="fa-solid fa-cart-shopping"></i>Compras</Link> )}
          </form>
        </div>
      </nav>
    </div>
  );
};
