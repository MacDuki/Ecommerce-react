import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { shopContext } from "../Context/Index";
import "./MinimizedProduct.css";

function MinimizedProduct(product) {
	const { plusCartOne, showMaximizedProduct, setProductInfo } =
		React.useContext(shopContext);
	function showProduct(productInfo) {
		showMaximizedProduct();
		setProductInfo(productInfo);
	}
	return (
		<div className='minimized-product-second-container'>
			<AiOutlinePlus
				onClick={() => {
					plusCartOne(product?.product);
				}}
				className='add-button'
			/>
			<figure className=''>
				<img
					onClick={() => showProduct(product.product)}
					className='product-img '
					src={product?.product.image}></img>
			</figure>
			<h4 className=''>{product?.product.category}</h4>
			<div className=''>
				<h2 className=''> {product?.product.title}</h2>
				<h3 className=''> {product?.product.price}$</h3>
			</div>
		</div>
	);
}

export { MinimizedProduct };
