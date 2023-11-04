import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { shopContext } from "../Context/Index";
import "./MinimizedProduct.css";

function MinimizedProduct(product) {
	const {
		plusCartOne,
		setShowMaximized,
		showMaximized,
		setProductInfo,
		cartProducts,
	} = React.useContext(shopContext);
	function showProduct(productInfo) {
		setShowMaximized(!showMaximized);
		setProductInfo(productInfo);
	}

	function isAdded(id) {
		const isInCart =
			cartProducts.filter((product) => product.id === id).length > 0;
		if (!isInCart) {
			return (
				<AiOutlinePlus
					onClick={() => {
						plusCartOne(product?.product);
					}}
					className='add-button'
				/>
			);
		} else {
			return <AiOutlineCheckCircle className='check-button' />;
		}
	}

	return (
		<motion.div
			layout
			animate={{ scale: 1, y: 0 }}
			initial={{ scale: 0.8, y: -200 }}
			transition={{ type: "linear", duration: 0.4 }}
			className='minimized-product-second-container'>
			{isAdded(product.product.id)}
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
		</motion.div>
	);
}

export { MinimizedProduct };
