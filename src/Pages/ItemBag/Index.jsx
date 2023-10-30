import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag/Index";
import { totalPrice } from "../../functions/totalPrice";
import "./ItemBag.css";

function ItemBag() {
	const { cartProducts } = React.useContext(shopContext);

	let realCartProducts;
	if (cartProducts.length > 0) {
		realCartProducts = cartProducts.slice();
		realCartProducts.shift();
	}

	return (
		<>
			<section className='itembag-section-container'>
				<div className='itembag-section'>
					{realCartProducts.map((product) => (
						<MinimizedProductBag key={product.id} product={product} />
					))}
				</div>
				<footer className='footer-total-price'>
					<span>Total:</span>
					<span>{totalPrice(realCartProducts)}$</span>
				</footer>
			</section>
		</>
	);
}

export { ItemBag };
