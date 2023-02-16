import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Carrito de compras</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <button onClick={() => navigate("/products")}>Agregar otro </button>
              </div>
              <div class="col-sm">
                  <button
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                {" "}
                Finalizar la compra{" "}
              </button>
              </div>
              
            </div>
          </div>
          
          
        </div>
      ) : (
        <h1> Tu carrito esta vacío</h1>
      )}
    </div>
  );
};
