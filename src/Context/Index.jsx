import { createContext, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	// Cart number logic
	//// Shopping cart . add products to cart

	const [cartProducts, setCartProducts] = useState([{}]);
	const [cartNumber, setCartNumber] = useState(0);

	function plusCartOne(productData) {
		setCartNumber(cartProducts.length);
		setCartProducts([...cartProducts, productData]);
	}

	// show maximized detail logic
	const [showMaximized, setShowMaximized] = useState(false);
	function showMaximizedProduct() {
		setShowMaximized(!showMaximized);
	}

	/// detail product info logic
	const [productInfo, setProductInfo] = useState({});

	// Order logic
	const [order, setOrder] = useState([]);

	return (
		<shopContext.Provider
			value={{
				plusCartOne,
				cartNumber,
				setCartNumber,
				showMaximizedProduct,
				showMaximized,
				productInfo,
				setProductInfo,
				cartProducts,
				setCartProducts,
				setShowMaximized,
				setOrder,
				order,
			}}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
