import React from "react";
import { shopContext } from "../Context/Index";
import "./MinimizedOrderList.css";
function MinimizedOrderList() {
	const { previousOrders } = React.useContext(shopContext);

	function showDetails(key) {
		console.log("Llamada a showDetails con key:", key);
		const orderSelected = previousOrders.find(
			(previousOrder) => previousOrder.index === key
		);

		if (orderSelected) {
			console.log("Objeto encontrado:", orderSelected);
			orderSelected.products.forEach((product) => {
				console.log("Título del producto:", product.title);
			});
		}
	}

	return (
		<div>
			{previousOrders?.map((previousOrder, key) => (
				<div key={key} className={key}>
					<p>{previousOrder.date}</p>
					<p>{previousOrder.totalProduct}</p>
					<p>{previousOrder.totalPrice}</p>
					<button
						onClick={() => {
							showDetails(key);
						}}>
						Detalles
					</button>
				</div>
			))}
		</div>
	);
}

export { MinimizedOrderList };
