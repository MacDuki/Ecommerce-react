import React from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { shopContext } from "../Context/Index";
import "./MaximizedProduct.css";

function MaximizedProduct() {
	const { showMaximized, showMaximizedProduct, productInfo, plusCartOne } =
		React.useContext(shopContext);

	return showMaximized ? (
		<>
			<div className='close-button-container'>
				<AiOutlineClose
					onClick={showMaximizedProduct}
					className='close-button'
				/>
			</div>
			<section className='maximized-product'>
				<div className='img-container-maximized'>
					<img className='' src={productInfo.image}></img>
				</div>
				<div className='info-container-maximized'>
					<h2 className=''>{productInfo.title}</h2>
					<p className=''>{productInfo.price}$</p>
				</div>
				<div onClick={plusCartOne} className='button-to-add'>
					<span className=''>AGREGAR</span>
					<AiOutlinePlus />
				</div>
			</section>
		</>
	) : null;
}

export { MaximizedProduct };
