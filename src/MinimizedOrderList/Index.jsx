import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
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
	function handleCloseSelected() {
		setSelectedOrder(null);
	}
	return (
		<>
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
				<aside>
					<AiFillCloseCircle onClick={handleCloseSelected} />
					{selectedOrder.products.map((product, index) => (
						<MinimizedProductBag key={index} product={product} />
					))}
				</aside>
			)}
		</>
	);
}

export { MinimizedOrderList };
