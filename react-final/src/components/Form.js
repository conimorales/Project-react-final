

import Footer from './Footer';

import React, { useContext } from "react";
import { ShopContext } from "../context/Shop-context";
import { PRODUCTS } from "../products";
import { CartItem } from "../pages/Cart/Cart-item-disable";
import { useNavigate } from "react-router-dom";
import {$} from 'jquery'; 
import { Link } from 'react-router-dom'

import "../pages/Cart/cart.css";

export const Form = () => {
	const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

	const totalAmount = getTotalCartAmount()[0],
	totalCount = getTotalCartAmount()[1];

	const navigate = useNavigate();
	function tableToJson(table){
		let data = []
		let header = []

		// for (let i=0; i <table.rows[0].cells.length; i++){
		// 	header[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '')
		// }

		for (let i=1; i <table.rows.length; i++){
			let tableRow = table.rows[i];
			let rowData = {}
			for (let j=0; j< tableRow.cells.length; j++){
				rowData[ header[j]]= tableRow.cells[j].innerHTML;
			}
			data.push(rowData);
		}
		return data;
	}

	let myjson = JSON.stringify(tableToJson(document.getElementsByClassName('export')))

	console.log(myjson)


return (
    <>
		<div className="cart">
			<div>
				<h1>Carrito de compras</h1>
			</div>
			<div className="container">
			<div className="row">
			<div className="col-sm">
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
					

					<div className="container ">
						<div className="col-md-12 text-center">

						<button className="btn bg-light export" type="submit" id="export"><Link className=' bg-light' >Enviar</Link></button>
							

						</div>
					</div>

					
					<div className="container bg-light">
						<div className="col-md-12 text-center">
							<button 
								onClick={() => {
								checkout();
								navigate("/products");
								}}
							>
								{" "}
								Volver{" "}
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