import { motion } from "framer-motion";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { shopContext } from "../../Context/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag/Index";
import { totalPrice } from "../../functions/totalPrice";
import "./ItemBag.css";

function ItemBag() {
	const {
		cartProducts,
		setCartProducts,
		setCartNumber,
		previousOrders,
		setPreviousOrders,
		showItemBag,
		setShowItemBag,
	} = React.useContext(shopContext);

	let realCartProducts;
	if (cartProducts.length > 0) {
		realCartProducts = cartProducts.slice();
		realCartProducts.shift();
	}

	function handlePreviousOrderList(orderToAdd) {
		setPreviousOrders([...previousOrders, orderToAdd]);
	}

	function handleCheckout() {
		const fechaActual = new Date();
		const año = fechaActual.getFullYear();
		const mes = fechaActual.getMonth();
		const dia = fechaActual.getDate();
		// Declarar 'indexN' antes del mapeo

		const orderToAdd = {
			date: `Compra realizada el: ${dia}-${mes + 1}-${año}`,
			products: realCartProducts,
			totalProduct: realCartProducts.length,
			totalPrice: totalPrice(realCartProducts),
			index: previousOrders.length,
		};
		handlePreviousOrderList(orderToAdd);
		setCartProducts([{}]);
		setCartNumber(0);
	}

	return (
		showItemBag && (
			<aside className='myorders-section-container'>
				<motion.div
					animate={{ scale: 1, y: 0 }}
					initial={{ scale: 0.8, y: -500 }}
					transition={{ type: "linear", bounce: 0.5, duration: 0.4 }}
					className='itembag-section-container'>
					<div className='close-itembag-button-container'>
						<AiOutlineClose
							onClick={() => {
								setShowItemBag(!showItemBag);
							}}
							className='close-itembag-button'
						/>
					</div>
					<h2 className='cart-tittle'>Carrito de compras</h2>
					{realCartProducts.length > 0 ? (
						<div className='itembag-section'>
							{realCartProducts?.map((product) => (
								<MinimizedProductBag key={product.id} product={product} />
							))}
						</div>
					) : (
						<div className='itembag-section'>
							<p className='cart-empty'>
								Debes seleccionar productos para poder hacer el checkout
							</p>
							<img
								className='itembag-cart-image'
								src='https://ecommerce-react-e965a.web.app/assets/empty_cart_image.png'
							/>
						</div>
					)}
					<div className='span-container'>
						<span>Total:</span>
						<span>{totalPrice(realCartProducts)}$</span>
					</div>
					<footer
						onClick={() => {
							realCartProducts.length > 0 && handleCheckout();
						}}
						className='footer-total-price'>
						<button
							onClick={() => {
								realCartProducts.length > 0 && handleCheckout();
							}}
							className='button-checkout'>
							Checkout
						</button>
					</footer>
				</motion.div>
			</aside>
		)
	);
}

export { ItemBag };
