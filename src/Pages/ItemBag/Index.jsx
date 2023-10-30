import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag";
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
			<section className='itembag-section'>
				{realCartProducts.map((product) => (
					<MinimizedProductBag key={product.id} product={product} />
				))}
			</section>
		</>
	);
}

export { ItemBag };
