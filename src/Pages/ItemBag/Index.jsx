import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedOrderList } from "../../MinimizedOrderList/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag/Index";
import { totalPrice } from "../../functions/totalPrice";
import "./ItemBag.css";

function ItemBag() {
	const {
		cartProducts,
		order,
		setOrder,
		setCartProducts,
		setCartNumber,
		previousOrders,
		setPreviousOrders,
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
		let indexN = 0; // Declarar 'indexN' antes del mapeo
		const orderToAdd = {
			date: `Compra realizada el: ${dia}-${mes + 1}-${año}`,
			products: realCartProducts,
			totalProduct: realCartProducts.length,
			totalPrice: totalPrice(realCartProducts),
			index: indexN++,
		};
		indexN++;
		handlePreviousOrderList(orderToAdd);
		setOrder([...order, orderToAdd]);
		setCartProducts([{}]);
		setCartNumber(0);
	}

	return (
		<>
			<section className='myorders-section-container'>
				<div className='itembag-section-container'>
					<div className='itembag-section'>
						{realCartProducts?.map((product) => (
							<MinimizedProductBag key={product.id} product={product} />
						))}
					</div>
					<div className='span-container'>
						<span>Total:</span>
						<span>{totalPrice(realCartProducts)}$</span>
					</div>
					<footer
						onClick={() => {
							handleCheckout();
						}}
						className='footer-total-price'>
						<button
							onClick={() => {
								handleCheckout();
							}}
							className='button-checkout'>
							Checkout
						</button>
					</footer>
				</div>
				<div className='myLastOrders-section-container'>
					<MinimizedOrderList />
				</div>
			</section>
		</>
	);
}

export { ItemBag };
