import React from "react";
import { shopContext } from "../Context/Index";
import { MinimizedProductBag } from "../MinimizedProductBag/Index";
import "./MinimizedOrderList.css";
function MinimizedOrderList() {
	const { previousOrders } = React.useContext(shopContext);
	const [selectedOrder, setSelectedOrder] = React.useState(null);

	function showDetails(key) {
		const orderSelected = previousOrders.find(
			(previousOrder) => previousOrder.index === key
		);

		if (!orderSelected) {
			setSelectedOrder(null);
		} else {
			setSelectedOrder(orderSelected);
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

			{selectedOrder && (
				<div>
					{selectedOrder.products.map((product, index) => (
						<MinimizedProductBag key={index} product={product} />
					))}
				</div>
			)}
		</div>
	);
}

export { MinimizedOrderList };
