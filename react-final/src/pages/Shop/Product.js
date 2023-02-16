import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, details } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt='img' />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>

      <div class="container">
      
        <div class="row">
        
          <div class="col-sm">
            <button type="button" className="addToCartBttn" data-toggle="modal" data-target="#exampleModal">
              Detalle
            </button>
            

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">

                  <div class="modal-body">
                    <div class="text-center">
                      <div class="card-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>

                        <p>{details}</p>

                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Agregar {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
