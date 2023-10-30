import React from "react";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { shopContext } from "../Context/Index";
import "./MinimizedProductBag.css";

function MinimizedProductBag(product, key) {
	const { cartProducts, setCartProducts } = React.useContext(shopContext);

	function removeCartOne(productData) {
		const updateProducts = [...cartProducts];

		const updatedProducts = updateProducts.filter(
			(product) => key !== productData.id
		);
		setCartProducts(updatedProducts);
	}

	return (
		<div className='product-container'>
			<IoIosRemoveCircleOutline
				onClick={() => {
					removeCartOne(product?.product);
				}}
				className=''
			/>
			<div className='img-container'>
				<div className=''>
					<img className='' src={product?.product.image}></img>
				</div>
			</div>
			<div className='productdata-container'>
				<h2 className='name'> {product?.product.title}</h2>
				<h3 className='price'> {product?.product.price}$</h3>
			</div>
		</div>
	);
}

export { MinimizedProductBag };
