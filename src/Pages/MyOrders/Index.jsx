import React from "react";
import { shopContext } from "../../Context/Index";

function MyOrders() {
	const { showMaximized, showMaximizedProduct, productInfo, plusCartOne } =
		React.useContext(shopContext);

	return <>My orders</>;
}

export { MyOrders };
