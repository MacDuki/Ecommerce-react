import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedOrderList } from "../../MinimizedOrderList/Index";
import "./MyOrders.css";
function MyOrders() {
	const { previousOrders } = React.useContext(shopContext);

	return (
		<>
			{previousOrders.length > 0 ? (
				<MinimizedOrderList />
			) : (
				<div className='empty-historial-container'>
					<p className='empty-historial'>
						Aquí aparecerá tu historial de compras
					</p>
					<img src='https://ecommerce-react-e965a.web.app/assets/pablita-list-is-empty.png' />
				</div>
			)}
		</>
	);
}

export { MyOrders };
