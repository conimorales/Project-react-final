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

      <div className="container">
      
        <div className="row">
        
          <div className="col-sm">

 
            <button type="button" className="addToCartBttn" data-toggle="modal" data-target="#exampleModal">
              Detalle
            </button>
            

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">

                  <div className="modal-body">
                    <div className="text-center">
                      <div className="card-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>

                        <p>{details}</p>

                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Agregar {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
