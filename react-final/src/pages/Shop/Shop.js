import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Footer from "../../components/Footer.js";

export const Shop = () => {
  return (
    <>  
      <div className="shop">
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
        
      </div>
      <Footer/>
    </>
  );
};
