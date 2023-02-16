import React from "react";
import "../styles/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Form from './Form.js'



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
						<div className="container">
							<table className="table table-sm table-bordered" id="productos">
								<thead>
								<tr>
								<th>id</th>
								<th>Nombre de Producto</th>
								<th>Cantidad</th>
								<th>Precio Unitario</th>
								<th>Precio Total</th>
								<th>¿Eliminar?</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td className={product.id}>{product.id}</td>
									<td className={product.name}>{product.name}</td>
									<td><select
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
							</select></td>
								
								<td className='cant'>{product.price}</td>
								<td className='money' >{product.price * product.count}</td>
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




						
					</>
					))}
					
					{products.length > 0 && (
					
	

						<div className="container mt-5 col-12">
							<p>
								El precio total de tu pedido es :
								<button>Calcular</button>
							</p>

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
