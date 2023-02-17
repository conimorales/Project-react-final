import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./cart-disable.css";
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, updateCartItemCount } =
    useContext(ShopContext);


    

return (

            <div class="col-sm">
                <table class="table table-bordered">
                        <tbody>
                            <tr>
                            <th scope="row" WIDTH="50">{id}</th>
                            <td><img src={productImage} alt="img" height="50"/></td>
                            <td >{productName}</td>
                            <td>${price}</td>
                            <td><input
                            value={cartItems[id]}
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            disabled/></td>
                            </tr>
                        </tbody>
                </table>
            </div>
            

);
};