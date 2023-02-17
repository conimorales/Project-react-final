

import Footer from './Footer';

import React, { useContext } from "react";
import { ShopContext } from "../context/Shop-context";
import { PRODUCTS } from "../products";
import { CartItem } from "../pages/Cart/Cart-item-disable";
import { useNavigate } from "react-router-dom";
import {$} from 'jquery'; 

import "../pages/Cart/cart.css";

export const Form = () => {
	const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

	const totalAmount = getTotalCartAmount()[0],
	totalCount = getTotalCartAmount()[1];

	const navigate = useNavigate();
	function tableToJson(table){
		let data = []
		let header = []

		for (let i=0; i <table.rows[0].cells.length; i++){
			header[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '')
		}

		for (let i=0; i <table.rows[0].cells.length; i++){
			header[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '')
		}
	}


return (
    <>
		<div className="cart">
			<div>
				<h1>Carrito de compras</h1>
			</div>
			<div className="container">
			<div class="row">
			<div class="col-sm">
				{PRODUCTS.map((product) => {
				if (cartItems[product.id] !== 0) {
					return <CartItem data={product} />;
				}
				})}
			</div>
		</div>
	
	{totalAmount > 0 ? (
        <div className="checkout">
			<p> Subtotal: ${totalAmount} - Cantidad Total: {totalCount} </p>

			<div className="container">
				<h1>Formulario de compra</h1>
			
				<form className="needs-validation mt-4" novalidate>
					<div className="form-row">
						<div className="col-md-6 mb-3">
							<label for="validationCustom01">Nombre</label>
							<input type="text" className="form-control" id="validationCustom01" required></input>
						</div>
						<div className="col-md-6 mb-3">
							<label for="validationCustom02">Apellido</label>
							<input type="text" className="form-control" id="validationCustom02" required></input>
						</div>
					</div>
					<div className="form-row">
						<div className="col-md-6 mb-3">
							<label for="validationCustom01">Correo</label>
							<input type="text" className="form-control" id="validationCustom01" required></input>
						</div>
						<div className="col-md-6 mb-3">
							<label for="validationCustom02">Confirmación de correo </label>
							<input type="text" className="form-control" id="validationCustom02" required></input>
						</div>
					</div>
					<div className="form-row">
						<div className="col-md-6 mb-3">
							<label for="validationCustom01">Teléfono</label>
							<input type="text" className="form-control" id="validationCustom01" required></input>
						</div>

					</div>

					
					<div class="container bg-light">
						<div class="col-md-12 text-center">
							<button id="export"
								onClick={() => {
								checkout();
								navigate("/checkout");
								}}
							>
								{" "}
								Realizar la compra{" "}
							</button> 

						</div>
					</div>
				</form>
			</div>
        </div>
      ) : (
        <h1> Tu carrito esta vacío</h1>

      )}
    </div>
    </div>
    <Footer/>
    </>
  );
};
export default Form