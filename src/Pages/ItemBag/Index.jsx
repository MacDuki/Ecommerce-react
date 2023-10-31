import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag/Index";
import { totalPrice } from "../../functions/totalPrice";
import "./ItemBag.css";

function ItemBag() {
	const { cartProducts, order, setOrder, setCartProducts, setCartNumber } =
		React.useContext(shopContext);

	let realCartProducts;
	if (cartProducts.length > 0) {
		realCartProducts = cartProducts.slice();
		realCartProducts.shift();
	}
	function handleCheckout() {
		const orderToAdd = {
			date: "Fecha",
			products: cartProducts,
			totalProduct: cartProducts.length,
			totalPrice: totalPrice(realCartProducts),
		};
		setOrder([...order, orderToAdd]);
		setCartProducts([{}]);
		setCartNumber(0);
	}

	return (
		<>
			<section className='itembag-section-container'>
				<div className='itembag-section'>
					{realCartProducts?.map((product) => (
						<MinimizedProductBag key={product.id} product={product} />
					))}
				</div>
				<footer className='footer-total-price'>
					<p>
						<span>Total:</span>
						<span>{totalPrice(realCartProducts)}$</span>
					</p>
					<button
						onClick={() => {
							handleCheckout();
						}}>
						Checkout
					</button>
				</footer>
			</section>
		</>
	);
}

export { ItemBag };
