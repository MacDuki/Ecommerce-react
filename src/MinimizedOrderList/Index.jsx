import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { shopContext } from "../Context/Index";
import { MinimizedProductBag } from "../MinimizedProductBag/Index";
import "./MinimizedOrderList.css";
function MinimizedOrderList() {
	const { previousOrders } = React.useContext(shopContext);
	const [selectedOrder, setSelectedOrder] = React.useState(null);
	let orderSelected;
	function showDetails(indexL) {
		orderSelected = previousOrders.find(
			(previousOrder) => previousOrder.index === indexL
		);

		if (!orderSelected) {
			setSelectedOrder(null);
		} else {
			setSelectedOrder(orderSelected);
		}
	}
	function handleCloseSelected() {
		setSelectedOrder(null);
		orderSelected = undefined;
	}
	return (
		<>
			<div className='orders-list-container'>
				{previousOrders?.map((previousOrder, key) => (
					<div key={key} className='order-info-container'>
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
			{selectedOrder && (
				<div className='item-list-container'>
					<AiFillCloseCircle
						className='close-button'
						onClick={handleCloseSelected}
					/>
					{selectedOrder.products.map((product, index) => (
						<MinimizedProductBag key={index} product={product} />
					))}
				</div>
			)}
		</>
	);
}

export { MinimizedOrderList };
