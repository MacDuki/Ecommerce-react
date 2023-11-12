import { motion } from "framer-motion";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
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
		<motion.section
			transition={{ duration: 0.001 }}
			layout
			className='all-container'>
			<aside className='orders-list-container'>
				<h2>Información sobre las ultimas compras:</h2>
				<div className='order-list-container'>
					{previousOrders?.map((previousOrder, key) => (
						<div key={key} className='order-list-item'>
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
				</div>
			</aside>
			{selectedOrder && (
				<motion.aside
					initial={{ opacity: 0, scale: 0.5, x: -200 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{ duration: 0.5, type: "linear" }}
					className='item-list-container'>
					<div className='item-list-secondContainer'>
						<AiOutlineClose
							className='close-button'
							onClick={handleCloseSelected}
						/>
						<div className='item-list-thirdContainer'>
							{selectedOrder.products.map((product, index) => (
								<MinimizedProductBag key={index} product={product} />
							))}
						</div>
					</div>
				</motion.aside>
			)}
		</motion.section>
	);
}

export { MinimizedOrderList };
