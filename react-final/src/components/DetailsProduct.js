import React, {
	useState,
	useEffect,
} from "react";
import "../styles/main.css";

import ShoppingCart from "./ShoppingCart";
import products from './data-products';
import Icon from './Cartwidget.js';
import { Link } from 'react-router-dom'
import Footer from "./Footer";



function DetailsProduct() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
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
                                <Link className="nav-link" to="/products" >Compra de productos</Link>
                            </li>


                            <li className="nav-item">

                                <button
                                    className="btn shopping-cart-bt"
                                    onClick={() =>
                                        setCartVisible(true)
                                    }>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {productsInCart.length >
                                        0 && (
                                        <span className="product-counte">
                                            {
                                                productsInCart.length
                                            }
                                        </span>
                                    )}
                                </button>
                            </li>

                        </ul>

                    </div>
                </nav>
			</div>
			<main>
				<h2 className="title">
					Productos
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							
							<p>
								{
									product.description
								}
							</p>

							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
                            <p>

                                <button className="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    +
                                </button>
                            </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        {product.description}
                                    </div>
                                </div>

							
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Agregar
									<p>
									
									</p>

									
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
            <Footer/>
		</div>
	);
}

export default DetailsProduct;
