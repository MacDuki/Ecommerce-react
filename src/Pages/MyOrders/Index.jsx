import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedOrderList } from "../../MinimizedOrderList/Index";
import "./MyOrders.css";
function MyOrders() {
	const { previousOrders } = React.useContext(shopContext);

	return (
		<section className='previous-section'>
			{previousOrders.length > 0 ? (
				<MinimizedOrderList />
			) : (
				<p className='empty-historial'>
					Aquí aparecerá tu historial de compras
				</p>
			)}
		</section>
	);
}

export { MyOrders };
