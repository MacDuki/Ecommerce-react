import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { shopContext } from "../Context/Index";
import "./MaximizedProduct.css";

function MaximizedProduct() {
	const {
		showMaximized,
		showMaximizedProduct,
		productInfo,
		plusCartOne,
		cartProducts,
	} = React.useContext(shopContext);

	function isAdded(id) {
		const isInCartM =
			cartProducts.filter((productInfo) => productInfo.id === id).length > 0;
		if (!isInCartM) {
			return (
				<AiOutlinePlus
					onClick={() => {
						plusCartOne(productInfo);
					}}
					className='button-to-add'
				/>
			);
		} else {
			return <AiOutlineCheckCircle className='checkM-button' />;
		}
	}

	return showMaximized ? (
		<motion.section
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, type: "linear" }}
			className='section-maximized-product'>
			<div className='close-button-container'>
				<IoIosCloseCircleOutline
					onClick={showMaximizedProduct}
					id='close-button'
				/>
			</div>
			<div className='maximized-product'>
				<div className='img-container-maximized'>
					<img className='' src={productInfo.image}></img>
				</div>
				<div className='info-container-maximized'>
					<h2 className=''>{productInfo.title}</h2>
					<p className=''>{productInfo.price}$</p>
				</div>
				{isAdded(productInfo.id)}
			</div>
		</motion.section>
	) : null;
}

export { MaximizedProduct };
