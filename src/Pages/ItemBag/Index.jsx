import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedOrderList } from "../../MinimizedOrderList/Index";
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
		setCartProducts([{}]);
		setCartNumber(0);
	}

	return (
		<section className='myorders-section-container'>
			<aside className='itembag-section-container'>
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
					</div>
				)}

				<div className='span-container'>
					<span>Total:</span>
					<span>{totalPrice(realCartProducts)}$</span>
				</div>
				<footer
					onClick={() => {
						realCartProducts.length > 0 ? handleCheckout() : null;
					}}
					className='footer-total-price'>
					<button
						onClick={() => {
							realCartProducts.length > 0 ? handleCheckout() : null;
						}}
						className='button-checkout'>
						Checkout
					</button>
				</footer>
			</aside>
			<div className='myLastOrders-section-container'>
				{previousOrders.length > 0 ? (
					<MinimizedOrderList />
				) : (
					<p className='empty-historial'>
						Aquí aparecerá tu historial de compras
					</p>
				)}
			</div>
		</section>
	);
}

export { ItemBag };
