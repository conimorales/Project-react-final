import React from "react";
import "../styles/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Form from './Form.js'

import Export from './Export.js'

var json="";
    $(document).ready(function () {
        $("#export").on("click",function () {
        $("table tbody tr").each(function () {
        json ="";
        $(this).find("td").each(function () {
            $this=$(this);
            json+=',"'+$this.attr("class")+'":"'+$this.html()+'"'
        });
        obj=JSON.parse('{'+json.substr(1)+'}');
        console.log(obj);
        });
        });
    });

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Carrito de compras</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							No has seleccionado nada 
						</span>
					)}
					{products.map((product) => (
						<>
						<div>
							<table class="table">
								<thead>
								<tr>
								<th>id</th>
								<th>Nombre de Producto</th>
								<th>Cantidad</th>
								<th>Precio Unitario</th>
								<th>Precio Total</th>
								</tr>
								</thead>
								<tbody>
								<tr>
								<td class='product'>{product.id}</td> 
								<td class='productName'>{product.name}</td> 
								<td class='cant'><select
								className="count"
								value={
									product.count
								}
								onChange={(
									event
								) => {
									onQuantityChange(
										product.id,
										event
											.target
											.value
									);
								}}>
								{[
									...Array(
										10
									).keys(),
								].map(
									(number) => {
										const num =
											number +
											1;
										return (
											<option
												value={
													num
												}
												key={
													num
												}>
												{
													num
												}
											</option>
										);
									}
								)}
							</select>
							</td>
								<td class='cant'>{product.price}</td>
								<td class='total'>{product.price * product.count}</td>
								<td><button
										className="btn remove-btn"
										onClick={() =>
											onProductRemove(
												product
											)
										}>
										<RiDeleteBin6Line
											size={20}
										/>
									</button></td>
								</tr>
								</tbody>
							</table>
						</div>

						<Export/>
						



						
					</>
					))}
					{products.length > 0 && (
	

						<div class="container mt-5">
							<h1>Formulario de compra</h1>

							<Form/>
							

						</div>

					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
