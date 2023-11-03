import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
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
			<section className='orders-list-section'>
				<h2>Información sobre las ultimas compras:</h2>
				{previousOrders?.map((previousOrder, key) => (
					<div key={key} className='order-list-container'>
						<div className='order-info'>
							<p>{previousOrder.date}</p>
							<p>{"Cantidad de productos: " + previousOrder.totalProduct}</p>
							<p>{"Costo total: " + previousOrder.totalPrice + "$"}</p>
						</div>
						<div>
							<TbListDetails
								className='show-details-button'
								onClick={() => {
									showDetails(key);
								}}>
								Detalles
							</TbListDetails>
						</div>
					</div>
				))}
			</section>
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
